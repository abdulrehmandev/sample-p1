import Logout from "@/components/auth/Logout";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <main className="min-h-screen w-full bg-white text-black">
      <div className="w-full flex items-center justify-between py-4 px-4 md:px-12">
        <p className="font-semibold">P-1</p>
        {session?.user ? (
          <div className="flex items-center gap-2">
            <p className="w-fit text-sm font-medium">{session.user.email}</p>
            <Link
              href="/app"
              className="font-medium bg-blue-500 text-white px-3 py-1 text-md rounded-md"
            >
              Go to App
            </Link>
            <Logout />
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="font-medium bg-blue-500 text-white px-3 py-1 text-md rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </main>
  );
}
