"use client";
import { useContext, useEffect, useState } from "react";
import { verifyOtp } from "@/services/authentication";
import { SetEmailAction } from "@/store/actions/userActions";
import { redirect } from "next/navigation";
import { AuthenticationContext } from "@/store/contexts/authContext";

export default function VerifyOtp() {
  const { auth, authDispatch } = useContext(AuthenticationContext);
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  let signUpEmail = "";
  useEffect(() => {
    let email = localStorage.getItem("sign_up_email");
    if (email) {
      signUpEmail = email;
    }
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    console.log(signUpEmail);
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID &&
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET
    ) {
      const data = await verifyOtp({
        otp,
        client_id: process.env.NEXT_PUBLIC_BACKEND_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_BACKEND_CLIENT_SECRET,
        email: signUpEmail,
      });
      if (data.status) {
        localStorage.setItem("oauth2", JSON.stringify(data.data));
        alert("Verify OTP success, signing in...");
        redirect("/");
      } else {
        alert("Verify OTP Failed");
        console.log(data.data);
      }
    }
    setLoading(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  const isFilled = otp ? true : false;
  return (
    <div className="w-1/2 p-2 bg-slate-200">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label className="font-bold">OTP:</label>
          <input
            type="text"
            className="px-2 py-1 rounded-md"
            required
            placeholder="OTP..."
            name="otp"
            onChange={handleChange}
            value={otp}
          ></input>
        </div>
        {!loading ? (
          <>
            <button
              type="submit"
              className="border bg-blue-500 py-2 px-1 w-1/6 self-center text-stone-200 rounded-md"
              disabled={!isFilled}
            >
              Verify
            </button>
            <button
              type="button"
              className="border bg-blue-500 py-2 px-1 w-1/6 self-center text-stone-200 rounded-md"
              disabled={!isFilled}
            >
              Re-send
            </button>
          </>
        ) : (
          <div className="self-center w-1/6 text-center">Verifying...</div>
        )}
      </form>
    </div>
  );
}
