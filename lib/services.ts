import { CustomerType } from "./definitions";

export async function createCustomer(body: {
  name: string;
  phone: string;
  city: string;
}) {
  const res = await fetch("/api/customer", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res;
}

export async function getCustomers(query?: string) {
  const res = await fetch(
    `http://localhost:3000/api/customer?query=${query || ""}`
  );
  const data = await res.json();
  return data as CustomerType[];
}
