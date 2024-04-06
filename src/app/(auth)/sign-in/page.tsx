"use client";
import { signIn, SignInType } from "@/services/authentication";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<SignInType>({
    username: "",
    password: "",
  });

  let isFilled = user.username && user.password ? true : false;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const targetName: string | null = target.getAttribute("name");
    if (!targetName) return;
    setUser((preState) => ({
      ...preState,
      [targetName]: target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    setError(false);
    event.preventDefault();
    if (!user.username || !user.password) {
      alert("Please fill the form.");
    }
    const data = await signIn(user);
    console.log(data);
    if (data.status) {
      localStorage.setItem("oauth2", JSON.stringify(data.data));
      push("/");
    } else {
      setError(true);
      console.log(data.data);
    }

    setLoading(false);
  };
  return (
    <div className="w-1/2 p-2 bg-slate-200">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold">Username:</label>
          <input
            type="text"
            className="px-2 py-1 rounded-md"
            required
            placeholder="Username..."
            name="username"
            onChange={handleChange}
            value={user.username}
          ></input>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold">Password:</label>
          <input
            type="password"
            className="px-2 py-1 rounded-md"
            required
            placeholder="Password..."
            name="password"
            onChange={handleChange}
            value={user.password}
          ></input>
        </div>
        {error ? (
          <div className="w-2/6 self-center text-center text-red-500">
            Username or passwor are incorrect
          </div>
        ) : null}
        {!loading ? (
          <button
            type="submit"
            className="border bg-blue-500 py-2 px-1 w-1/6 self-center text-stone-200 rounded-md"
            disabled={!isFilled}
          >
            Sign in
          </button>
        ) : (
          <div className="w-1/6 self-center text-center">Signing in...</div>
        )}
      </form>
    </div>
  );
}

export type { SignInType };
