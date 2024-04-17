import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-2">
      <Link
        href="/app/customer/add"
        className="font-medium bg-blue-500 text-white px-3 py-1 text-md rounded-md"
      >
        Add customer
      </Link>
      <Link
        href="/app/customer"
        className="font-medium bg-green-500 text-white px-3 py-1 text-md rounded-md"
      >
        View customers
      </Link>
    </div>
  );
};

export default page;
