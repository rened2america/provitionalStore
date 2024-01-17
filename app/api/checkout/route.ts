import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.itineraryId) {
      throw new Error("Missing itinerary_id");
    }

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: "price_1OUaqODsqhqgulRLU35CHrfa",
          quantity: 1,
        },
      ],
      success_url: `http://localhost:3000/success?itineraryId=${body.itineraryId}`,
      cancel_url: `http://localhost:3000/`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);

    return NextResponse.json({ result: checkoutSession, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "something went wrong", ok: false },
      { status: 500 }
    );
  }
}
