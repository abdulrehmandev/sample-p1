"use client";

import Search from "@/components/customers/Search";
import { CustomerType } from "@/lib/definitions";
import { getCustomers } from "@/lib/services";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const [res, setRes] = React.useState<CustomerType[]>();
  const searchParams = useSearchParams();

  useEffect(() => {
    getCustomers(searchParams.get("query") || "").then((data) => {
      setRes(data);
    });
  }, [searchParams.get("query")]);

  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <Search />
      {res &&
        res.map((customer) => (
          <div className="" key={customer.id}>
            Name: {customer.name} | Phone: {customer.phone} | City:{" "}
            {customer.phone} | Weather Condition: {customer.weatherCondition}{" "}
          </div>
        ))}
    </main>
  );
};

export default page;
