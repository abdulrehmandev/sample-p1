"use client";

import { signOut } from "next-auth/react";
import React from "react";

const Logout = () => {
  return (
    <button
      className="py-1 px-3 bg-neutral-200 font-medium"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
};

export default Logout;
