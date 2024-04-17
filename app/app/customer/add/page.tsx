"use client";

import { createCustomer } from "@/lib/services";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCustomer(formState).then((data) => {
      router.push("/app/customer");
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center flex-col gap-2"
    >
      <input
        type="text"
        value={formState.name}
        onChange={handleChange}
        name="name"
        placeholder="Name"
        className="py-1 px-2 border rounded-md"
      />
      <input
        type="text"
        value={formState.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Phone"
        className="py-1 px-2 border rounded-md"
      />
      <input
        type="text"
        value={formState.city}
        onChange={handleChange}
        name="city"
        placeholder="City"
        className="py-1 px-2 border rounded-md"
      />
      <button className="py-1 px-3 bg-neutral-200 rounded-md">
        Add Customer
      </button>
    </form>
  );
};

export default page;
