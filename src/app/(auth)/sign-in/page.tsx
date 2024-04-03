"use client";
import { useState } from "react";
type User = {
  username: string;
  password: string;
};
export default function Login() {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  let isFilled = user.username && user.password ? true : false;
  console.log(isFilled);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const targetName: string | null = target.getAttribute("name");
    if (!targetName) return;
    setUser((preState) => ({
      ...preState,
      [targetName]: target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user.username || !user.password) {
      alert("Please fill the form.");
    }
    return;
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
        <button
          type="submit"
          className="border bg-blue-500 py-2 px-1 w-1/6 self-center text-stone-200 rounded-md"
          disabled={!isFilled}
        >
          Login
        </button>
      </form>
    </div>
  );
}
