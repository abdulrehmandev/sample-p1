"use client";

import { signIn } from "next-auth/react";
import React from "react";

interface SigninFormProps {}

const SigninForm: React.FC<SigninFormProps> = () => {
  const signInWithGoogle = async () => {
    await signIn("google");
  };

  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="bg-zinc-800 text-white font-medium px-3 py-1 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SigninForm;
