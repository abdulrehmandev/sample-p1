import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const session = await getAuthSession();

  if (!session?.user) {
    notFound();
  }

  return <div>{children}</div>;
};

export default Layout;
