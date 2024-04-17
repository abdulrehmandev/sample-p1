import { redirect } from "next/navigation";
import React, { FC } from "react";
import { getAuthSession } from "@/lib/auth";
import SigninForm from "@/components/auth/SigninForm";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = async () => {
  const session = await getAuthSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <SigninForm />
    </main>
  );
};

export default LoginPage;
