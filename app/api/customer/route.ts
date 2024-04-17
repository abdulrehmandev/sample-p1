import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${body.city}&aqi=no`
    );
    const data = await res.json();
    const condition = data.current.condition.text;

    await db.customer.create({
      data: {
        name: body.name,
        phone: body.phone,
        city: body.city,
        weatherCondition: condition,
      },
    });

    return new Response("OK", { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";

    const customers = await db.customer.findMany({
      where: query
        ? {
            name: {
              contains: query,
            },
          }
        : {},
    });

    return new Response(JSON.stringify(customers), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
