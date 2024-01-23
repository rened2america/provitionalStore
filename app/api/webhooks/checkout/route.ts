import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "");

// const cors = Cors({
//   allowMethods: ["POST", "HEAD"],
// });

const secret = process.env.STRIPE_WEBHOOK_SECRET || "";

const buffer = (req: Request) => {
  return new Promise<Buffer>((resolve, reject) => {
    const chunks: Buffer[] = [];
    //@ts-ignore

    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });
    //@ts-ignore

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    //@ts-ignore

    req.on("error", reject);
  });
};

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(secret);

    const webhookSecret: string = secret;

    if (req.method === "POST") {
      //@ts-ignore
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
        const stripeObject: Stripe.PaymentIntent = event.data.object as any;
        console.log(`💰 PaymentIntent status: ${stripeObject.status}`);
      }
    }

    // const body = await req.text();

    // const signature = headers().get("stripe-signature");

    // const event = stripe.webhooks.constructEvent(body, signature, secret);

    // if (event.type === "checkout.session.completed") {
    //   console.log("entro", event.data.object);
    // }

    // const type = {
    //   Poster: "SPP",
    //   Canvas: "WCS",
    //   Sweatshirt: "SWA",
    //   Hoodie: "HOA",
    //   Mug: "MUG",
    //   Shirt: "TSA",
    // };

    // const color = {
    //   white: "1W",
    //   black: "1B",
    //   red: "1R",
    //   blue: "1C",
    //   beige: "4Y",
    // };

    // const size = {
    //   SS: "00S",
    //   SM: "00M",
    //   SL: "00L",
    //   SXL: "0XL",
    //   S2XL: "2XL",
    //   S3XL: "3XL",
    //   S4XL: "4XL",
    //   S5XL: "5XL",
    // };

    // if (req.body.type === "checkout.session.completed") {
    //   const user = req.body.data.object.customer_details;

    //   const listData = await stripe.checkout.sessions.listLineItems(
    //     req.body.data.object.id
    //   );

    //   let listOfItems = [];

    //   const listPromise = listData.data.map(async (product) => {
    //     const sku = `PZ${design.id.toString().padStart(8, "0")}UN${
    //       type[design.product.types[0].value]
    //     }${color[design.variant]}${size[`S${design.size}`]}`;

    //     const item = {
    //       sku,
    //       name: design.product.title,
    //       quantity: product.quantity,
    //       unitPrice: product.price.unit_amount / 100,
    //       imageUrl: design.url,
    //       weight: {
    //         value: 0,
    //         units: "ounces",
    //       },
    //     };

    //     listOfItems.push(item);
    //   });
    //   await Promise.all(listPromise);

    //   const headers = new Headers();
    //   headers.append("Content-Type", "application/json");
    //   headers.append("Authorization", `Basic ${process.env.AUTH_SHIPSTATION!}`);
    //   function getCurrentDateTime() {
    //     let now = new Date();

    //     let year = now.getFullYear();
    //     let month = (now.getMonth() + 1).toString().padStart(2, "0");
    //     let day = now.getDate().toString().padStart(2, "0");
    //     let hours = now.getHours().toString().padStart(2, "0");
    //     let minutes = now.getMinutes().toString().padStart(2, "0");
    //     let seconds = now.getSeconds().toString().padStart(2, "0");
    //     let milliseconds = now.getMilliseconds().toString().padEnd(3, "0");

    //     return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}000`;
    //   }

    //   const raw = JSON.stringify({
    //     orderNumber: req.body.data.object.id,
    //     orderDate: getCurrentDateTime(),
    //     orderStatus: "awaiting_shipment",
    //     customerUsername: user.name ? user.name : "",
    //     customerEmail: user.email ? user.email : "",
    //     billTo: {
    //       name: user.name ? user.name : "",
    //       company: null,
    //       street1: user.address.line1 ? user.address.line1 : "",
    //       street2: user.address.line2 ? user.address.line2 : "",
    //       street3: null,
    //       city: user.address.city ? user.address.city : "",
    //       state: user.address.state ? user.address.state : "",
    //       postalCode: user.address.postal_code ? user.address.postal_code : "",
    //       country: user.address.country ? user.address.country : "",
    //       phone: user.phone ? user.phone : "",
    //       residential: true,
    //     },
    //     shipTo: {
    //       name: user.name ? user.name : "",
    //       company: null,
    //       street1: user.address.line1 ? user.address.line1 : "",
    //       street2: user.address.line2 ? user.address.line2 : "",
    //       street3: null,
    //       city: user.address.city ? user.address.city : "",
    //       state: user.address.state ? user.address.state : "",
    //       postalCode: user.address.postal_code ? user.address.postal_code : "",
    //       country: user.address.country ? user.address.country : "",
    //       phone: user.phone ? user.phone : "",
    //       residential: true,
    //     },
    //     items: listOfItems,
    //   });

    //   const requestOptions = {
    //     method: "POST",
    //     headers: headers,
    //     body: raw,
    //   };

    //   fetch("https://ssapi.shipstation.com/orders/createorder", requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
    // }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }
}
