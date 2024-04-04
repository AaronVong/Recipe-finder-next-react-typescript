"use client";
import {
  signUp,
  SignUpErrorType,
  SignUpType,
  Oauh2Type,
} from "@/services/authentication";
import { SetEmailAction } from "@/store/actions/userActions";
import { GlobalContext } from "@/store/contexts";
import Error from "next/error";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function SignUp() {
  const { state, dispatch } = useContext(GlobalContext);

  const { push } = useRouter();
  const [user, setUser] = useState<SignUpType>({
    name: "",
    mail: "",
    pass: "",
    pass_confirm: "",
    field_u_first_name: "",
    field_u_last_name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState<SignUpErrorType>({
    message: {
      name: "",
      mail: "",
      pass: "",
      pass_confirm: "",
      field_u_first_name: "",
      field_u_last_name: "",
    },
  });
  let isFilled =
    user.name &&
    user.pass &&
    user.pass_confirm &&
    user.mail &&
    user.field_u_first_name &&
    user.field_u_last_name
      ? true
      : false;
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
    event.preventDefault();
    if (
      !user.name ||
      !user.pass ||
      !user.pass_confirm ||
      !user.mail ||
      !user.field_u_first_name ||
      !user.field_u_last_name
    ) {
      alert("Please fill the form.");
      return;
    }

    if (user.pass !== user.pass_confirm) {
      alert("Password does not match.");
      return;
    }

    const response = await signUp(user);
    if (response.status) {
      dispatch(SetEmailAction(user.mail));
      localStorage.setItem("sign_up_email", user.mail);
      alert("An mail with OTP has been sent, please verify it.");
      push("/verify-otp");
    } else {
      setErrors(response.data);
    }
    setLoading(false);
  };

  const handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.getAttribute("name");
    if (name) {
      setErrors((preState) => ({
        message: {
          ...preState.message,
          [name]: "",
        },
      }));
    }
  };
  return (
    <div className="w-1/2 p-2 bg-slate-200">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <div className="flex gap-x-2">
          <div className="w-1/2 flex flex-col gap-y-2">
            <label className="font-bold">
              First name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="px-2 py-1 rounded-md bg-slate-300"
              required
              placeholder="First name..."
              name="field_u_first_name"
              onChange={handleChange}
              onFocus={handleFocus}
              value={user.field_u_first_name}
            ></input>
            <span className="text-red-500">
              {errors.message.field_u_first_name}
            </span>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            <label className="font-bold">
              Last name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="px-2 py-1 rounded-md bg-slate-300"
              required
              placeholder="Last name..."
              name="field_u_last_name"
              onChange={handleChange}
              onFocus={handleFocus}
              value={user.field_u_last_name}
            ></input>
            <span className="text-red-500">
              {errors.message.field_u_last_name}
            </span>
          </div>
        </div>

        <div className="flex gap-x-2">
          <div className="w-1/2 flex flex-col gap-y-2">
            <label className="font-bold">
              Username: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="px-2 py-1 rounded-md bg-slate-300"
              required
              placeholder="Username..."
              name="name"
              onChange={handleChange}
              value={user.name}
              onFocus={handleFocus}
            ></input>
            <span className="text-red-500">{errors.message.name}</span>
          </div>
          <div className="w-1/2 flex flex-col gap-y-2">
            <label className="font-bold">
              Email: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="px-2 py-1 rounded-md bg-slate-300"
              required
              placeholder="Email..."
              name="mail"
              onChange={handleChange}
              onFocus={handleFocus}
              value={user.mail}
            ></input>
            <span className="text-red-500">{errors.message.mail}</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <label className="font-bold">
            Password: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="px-2 py-1 rounded-md bg-slate-300"
            required
            placeholder="Password..."
            name="pass"
            onChange={handleChange}
            onFocus={handleFocus}
            value={user.pass}
          ></input>
          <span className="text-red-500">{errors.message.pass}</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold">
            Confirm Password: <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="px-2 py-1 rounded-md bg-slate-300"
            required
            placeholder="Confirm Your Password..."
            name="pass_confirm"
            onChange={handleChange}
            onFocus={handleFocus}
            value={user.pass_confirm}
          ></input>
        </div>
        {!loading ? (
          <button
            type="submit"
            className={`border py-2 px-1 w-1/6 self-center text-stone-200 rounded-md ${
              isFilled ? "bg-blue-500" : "bg-blue-300"
            }`}
            disabled={!isFilled}
          >
            Sign up
          </button>
        ) : (
          <div className="self-center w-1/6 text-center">Signing up...</div>
        )}
      </form>
    </div>
  );
}

export type { SignUpType };
