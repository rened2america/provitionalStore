import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || "");

// const cors = Cors({
//   allowMethods: ["POST", "HEAD"],
// });

const secretWebhook = process.env.STRIPE_WEBHOOK_SECRET || "";
const secret = process.env.STRIPE_SECRET_KEY || "";

export async function POST(req: Request) {
  const searchProduct = (name: string) => {
    if (name === "6 PMers Black T-shirt S") {
      return {
        id: "1",
        size: "00S",
        name: "6 PMers Black T-shirt S",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt M") {
      return {
        id: "2",
        size: "00M",
        name: "6 PMers Black T-shirt M",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt L") {
      return {
        id: "3",
        size: "00L",
        name: "6 PMers Black T-shirt L",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt XL") {
      return {
        id: "4",
        size: "0XL",
        name: "6 PMers Black T-shirt XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt 2XL") {
      return {
        id: "5",
        size: "2XL",
        name: "6 PMers Black T-shirt 2XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt 3XL") {
      return {
        id: "6",
        size: "3XL",
        name: "6 PMers Black T-shirt 3XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt 4XL") {
      return {
        id: "7",
        size: "4XL",
        name: "6 PMers Black T-shirt 4XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }
    if (name === "6 PMers Black T-shirt 5XL") {
      return {
        id: "8",
        size: "5XL",
        name: "6 PMers Black T-shirt 5XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/design3+(1).jpg",
      };
    }

    //

    if (name === "It's 6PM Somewhere Black T-shirt S") {
      return {
        id: "9",
        size: "00S",
        name: "It's 6PM Somewhere Black T-shirt S",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt M") {
      return {
        id: "10",
        size: "00M",
        name: "It's 6PM Somewhere Black T-shirt M",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt L") {
      return {
        id: "11",
        size: "00L",
        name: "It's 6PM Somewhere Black T-shirt L",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt XL") {
      return {
        id: "12",
        size: "0XL",
        name: "It's 6PM Somewhere Black T-shirt XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt 2XL") {
      return {
        id: "13",
        size: "2XL",
        name: "It's 6PM Somewhere Black T-shirt 2XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt 3XL") {
      return {
        id: "14",
        size: "3XL",
        name: "It's 6PM Somewhere Black T-shirt 3XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt 4XL") {
      return {
        id: "15",
        size: "4XL",
        name: "It's 6PM Somewhere Black T-shirt 4XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }
    if (name === "It's 6PM Somewhere Black T-shirt 5XL") {
      return {
        id: "16",
        size: "5XL",
        name: "It's 6PM Somewhere Black T-shirt 5XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU03+(1).jpg",
      };
    }

    //

    if (name === "Re Social White T-shirt S Test") {
      return {
        id: "17",
        size: "00S",
        name: "Re Social White T-shirt S Test",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt M") {
      return {
        id: "18",
        size: "00M",
        name: "Re Social White T-shirt M",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt L") {
      return {
        id: "19",
        size: "00L",
        name: "Re Social White T-shirt L",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt XL") {
      return {
        id: "20",
        size: "0XL",
        name: "Re Social White T-shirt XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt 2XL") {
      return {
        id: "21",
        size: "2XL",
        name: "Re Social White T-shirt 2XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt 3XL") {
      return {
        id: "22",
        size: "3XL",
        name: "Re Social White T-shirt 3XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt 4XL") {
      return {
        id: "23",
        size: "4XL",
        name: "Re Social White T-shirt 4XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
    if (name === "Re Social White T-shirt 5XL") {
      return {
        id: "24",
        size: "5XL",
        name: "Re Social White T-shirt 5XL",
        imgUrl:
          "https://politicozen-prod.s3.us-east-2.amazonaws.com/MU02+(1).jpg",
      };
    }
  };

  try {
    const stripe = new Stripe(secret);
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, secretWebhook);
    } catch (error) {
      //@ts-ignore
      return new Response(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
      const user = session.customer_details;
      const listData = await stripe.checkout.sessions.listLineItems(session.id);
      const items = listData.data.map((item: any) => {
        const currentItem = searchProduct(item.description);
        console.log(item);
        const sku = `PZ${currentItem?.id.padStart(8, "0")}UNTSA${
          //@ts-ignore
          parseInt(currentItem.id) > 16 ? "1W" : "1B"
        }${currentItem?.size}`;
        const productToReturn = {
          sku,
          name: currentItem?.name,
          quantity: item.quantity,
          unitPrice: item.price.unit_amount / 100,
          imageUrl: currentItem?.imgUrl,
          weight: {
            value: 0,
            units: "ounces",
          },
        };
        return productToReturn;
      });
      console.log("Se ejectuo checkout", items);
      console.log("Se ejectuo checkout", user);

      const headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Authorization", `Basic ${process.env.AUTH_SHIPSTATION!}`);
      console.log("Se ejectuo after headers");

      const getCurrentDateTime = () => {
        let now = new Date();

        let year = now.getFullYear();
        let month = (now.getMonth() + 1).toString().padStart(2, "0");
        let day = now.getDate().toString().padStart(2, "0");
        let hours = now.getHours().toString().padStart(2, "0");
        let minutes = now.getMinutes().toString().padStart(2, "0");
        let seconds = now.getSeconds().toString().padStart(2, "0");
        let milliseconds = now.getMilliseconds().toString().padEnd(3, "0");

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}000`;
      };

      const raw = JSON.stringify({
        orderNumber: session.id,
        orderDate: getCurrentDateTime(),
        orderStatus: "awaiting_shipment",
        customerUsername: user?.name ? user.name : "",
        customerEmail: user?.email ? user?.email : "",
        billTo: {
          name: user?.name ? user.name : "",
          company: null,
          street1: user?.address?.line1 ? user.address.line1 : "",
          street2: user?.address?.line2 ? user.address.line2 : "",
          street3: null,
          city: user?.address?.city ? user.address.city : "",
          state: user?.address?.state ? user.address.state : "",
          postalCode: user?.address?.postal_code
            ? user.address.postal_code
            : "",
          country: user?.address?.country ? user.address.country : "",
          phone: user?.phone ? user.phone : "",
          residential: true,
        },
        shipTo: {
          name: user?.name ? user.name : "",
          company: null,
          street1: user?.address?.line1 ? user.address.line1 : "",
          street2: user?.address?.line2 ? user.address.line2 : "",
          street3: null,
          city: user?.address?.city ? user.address.city : "",
          state: user?.address?.state ? user.address.state : "",
          postalCode: user?.address?.postal_code
            ? user.address.postal_code
            : "",
          country: user?.address?.country ? user.address.country : "",
          phone: user?.phone ? user?.phone : "",
          residential: true,
        },
        items: items,
      });
      console.log("after raw", raw);
      const requestOptions = {
        method: "POST",
        headers: headers,
        body: raw,
      };

      fetch("https://ssapi.shipstation.com/orders/createorder", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
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
