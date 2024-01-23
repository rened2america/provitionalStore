import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET || "";
  const stripe = new Stripe(secret);

  const webhookSecret: string = secret;

  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      const body = await buffer(req);
      //@ts-ignore
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err) {
      // On error, log and return the error message
      //@ts-ignore

      console.log(`❌ Error message: ${err.message}`);
      //@ts-ignore

      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log("✅ Success:", event.id);

    // Cast event data to Stripe object
    if (event.type === "checkout.session.completed") {
      console.log(`💰 General status: event.data`, event.data);

      //@ts-ignore
      console.log(`💰 PaymentIntent status: ${event.data.status}`);
    }

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const buffer = (req: NextApiRequest) => {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", reject);
  });
};

export default handler;
