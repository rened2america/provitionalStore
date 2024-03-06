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

    if (name === "Re Social White T-shirt S") {
      return {
        id: "17",
        size: "00S",
        name: "Re Social White T-shirt S",
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

    const shirtMap: any = {
      "2A AF White S": { id: "25", size: "00S" },
      "2A AF White M": { id: "26", size: "00M" },
      "2A AF White L": { id: "27", size: "00L" },
      "2A AF White XL": { id: "28", size: "0XL" },
      "2A AF White 2XL": { id: "29", size: "2XL" },
      "2A AF White 3XL": { id: "30", size: "3XL" },
      "2A AF White 4XL": { id: "31", size: "4XL" },
      "2A AF White 5XL": { id: "32", size: "5XL" },
      "2nd Amendment American Freedom White S": { id: "33", size: "00S" },
      "2nd Amendment American Freedom White M": { id: "34", size: "00M" },
      "2nd Amendment American Freedom White L": { id: "35", size: "00L" },
      "2nd Amendment American Freedom White XL": { id: "36", size: "0XL" },
      "2nd Amendment American Freedom White 2XL": { id: "37", size: "2XL" },
      "2nd Amendment American Freedom White 3XL": { id: "38", size: "3XL" },
      "2nd Amendment American Freedom White 4XL": { id: "39", size: "4XL" },
      "2nd Amendment American Freedom White 5XL": { id: "40", size: "5XL" },
      "Adam Krum Pocket Classic Black S": { id: "41", size: "00S" },
      "Adam Krum Pocket Classic Black M": { id: "42", size: "00M" },
      "Adam Krum Pocket Classic Black L": { id: "43", size: "00L" },
      "Adam Krum Pocket Classic Black XL": { id: "44", size: "0XL" },
      "Adam Krum Pocket Classic Black 2XL": { id: "45", size: "2XL" },
      "Adam Krum Pocket Classic Black 3XL": { id: "46", size: "3XL" },
      "Adam Krum Pocket Classic Black 4XL": { id: "47", size: "4XL" },
      "Adam Krum Pocket Classic Black 5XL": { id: "48", size: "5XL" },
      "Adam Krum Pocket Classic Green S": { id: "49", size: "00S" },
      "Adam Krum Pocket Classic Green M": { id: "50", size: "00M" },
      "Adam Krum Pocket Classic Green L": { id: "51", size: "00L" },
      "Adam Krum Pocket Classic Green XL": { id: "52", size: "0XL" },
      "Adam Krum Pocket Classic Green 2XL": { id: "53", size: "2XL" },
      "Adam Krum Pocket Classic Green 3XL": { id: "54", size: "3XL" },
      "Adam Krum Pocket Classic Green 4XL": { id: "55", size: "4XL" },
      "Adam Krum Pocket Classic Green 5XL": { id: "56", size: "5XL" },
      "Adam Krum Pocket Classic Grey S": { id: "57", size: "00S" },
      "Adam Krum Pocket Classic Grey M": { id: "58", size: "00M" },
      "Adam Krum Pocket Classic Grey L": { id: "59", size: "00L" },
      "Adam Krum Pocket Classic Grey XL": { id: "60", size: "0XL" },
      "Adam Krum Pocket Classic Grey 2XL": { id: "61", size: "2XL" },
      "Adam Krum Pocket Classic Grey 3XL": { id: "62", size: "3XL" },
      "Adam Krum Pocket Classic Grey 4XL": { id: "63", size: "4XL" },
      "Adam Krum Pocket Classic Grey 5XL": { id: "64", size: "5XL" },
      "Adam Krum Pocket Classic Sand S": { id: "65", size: "00S" },
      "Adam Krum Pocket Classic Sand M": { id: "66", size: "00M" },
      "Adam Krum Pocket Classic Sand L": { id: "67", size: "00L" },
      "Adam Krum Pocket Classic Sand XL": { id: "68", size: "0XL" },
      "Adam Krum Pocket Classic Sand 2XL": { id: "69", size: "2XL" },
      "Adam Krum Pocket Classic Sand 3XL": { id: "70", size: "3XL" },
      "Adam Krum Pocket Classic Sand 4XL": { id: "71", size: "4XL" },
      "Adam Krum Pocket Classic Sand 5XL": { id: "72", size: "5XL" },
      "Adam Krum Classic White S": { id: "73", size: "00S" },
      "Adam Krum Classic White M": { id: "74", size: "00M" },
      "Adam Krum Classic White L": { id: "75", size: "00L" },
      "Adam Krum Classic White XL": { id: "76", size: "0XL" },
      "Adam Krum Classic White 2XL": { id: "77", size: "2XL" },
      "Adam Krum Classic White 3XL": { id: "78", size: "3XL" },
      "Adam Krum Classic White 4XL": { id: "79", size: "4XL" },
      "Adam Krum Classic White 5XL": { id: "80", size: "5XL" },
      "Adam Krum Pocket Guitar Black S": { id: "81", size: "00S" },
      "Adam Krum Pocket Guitar Black M": { id: "82", size: "00M" },
      "Adam Krum Pocket Guitar Black L": { id: "83", size: "00L" },
      "Adam Krum Pocket Guitar Black XL": { id: "84", size: "0XL" },
      "Adam Krum Pocket Guitar Black 2XL": { id: "85", size: "2XL" },
      "Adam Krum Pocket Guitar Black 3XL": { id: "86", size: "3XL" },
      "Adam Krum Pocket Guitar Black 4XL": { id: "87", size: "4XL" },
      "Adam Krum Pocket Guitar Black 5XL": { id: "88", size: "5XL" },
      "Adam Krum Pocket Guitar Green S": { id: "89", size: "00S" },
      "Adam Krum Pocket Guitar Green M": { id: "90", size: "00M" },
      "Adam Krum Pocket Guitar Green L": { id: "91", size: "00L" },
      "Adam Krum Pocket Guitar Green XL": { id: "92", size: "0XL" },
      "Adam Krum Pocket Guitar Green 2XL": { id: "93", size: "2XL" },
      "Adam Krum Pocket Guitar Green 3XL": { id: "94", size: "3XL" },
      "Adam Krum Pocket Guitar Green 4XL": { id: "95", size: "4XL" },
      "Adam Krum Pocket Guitar Green 5XL": { id: "96", size: "5XL" },
      "Adam Krum Pocket Guitar Grey S": { id: "97", size: "00S" },
      "Adam Krum Pocket Guitar Grey M": { id: "98", size: "00M" },
      "Adam Krum Pocket Guitar Grey L": { id: "99", size: "00L" },
      "Adam Krum Pocket Guitar Grey XL": { id: "100", size: "0XL" },
      "Adam Krum Pocket Guitar Grey 2XL": { id: "101", size: "2XL" },
      "Adam Krum Pocket Guitar Grey 3XL": { id: "102", size: "3XL" },
      "Adam Krum Pocket Guitar Grey 4XL": { id: "103", size: "4XL" },
      "Adam Krum Pocket Guitar Grey 5XL": { id: "104", size: "5XL" },
      "Adam Krum Pocket Guitar Sand S": { id: "105", size: "00S" },
      "Adam Krum Pocket Guitar Sand M": { id: "106", size: "00M" },
      "Adam Krum Pocket Guitar Sand L": { id: "107", size: "00L" },
      "Adam Krum Pocket Guitar Sand XL": { id: "108", size: "0XL" },
      "Adam Krum Pocket Guitar Sand 2XL": { id: "109", size: "2XL" },
      "Adam Krum Pocket Guitar Sand 3XL": { id: "110", size: "3XL" },
      "Adam Krum Pocket Guitar Sand 4XL": { id: "111", size: "4XL" },
      "Adam Krum Pocket Guitar Sand 5XL": { id: "112", size: "5XL" },
      "Adam Krum Guitar White S": { id: "113", size: "00S" },
      "Adam Krum Guitar White M": { id: "114", size: "00M" },
      "Adam Krum Guitar White L": { id: "115", size: "00L" },
      "Adam Krum Guitar White XL": { id: "116", size: "0XL" },
      "Adam Krum Guitar White 2XL": { id: "117", size: "2XL" },
      "Adam Krum Guitar White 3XL": { id: "118", size: "3XL" },
      "Adam Krum Guitar White 4XL": { id: "119", size: "4XL" },
      "Adam Krum Guitar White 5XL": { id: "120", size: "5XL" },
      "Adam Krum Pocket Star Black S": { id: "121", size: "00S" },
      "Adam Krum Pocket Star Black M": { id: "122", size: "00M" },
      "Adam Krum Pocket Star Black L": { id: "123", size: "00L" },
      "Adam Krum Pocket Star Black XL": { id: "124", size: "0XL" },
      "Adam Krum Pocket Star Black 2XL": { id: "125", size: "2XL" },
      "Adam Krum Pocket Star Black 3XL": { id: "126", size: "3XL" },
      "Adam Krum Pocket Star Black 4XL": { id: "127", size: "4XL" },
      "Adam Krum Pocket Star Black 5XL": { id: "128", size: "5XL" },
      "Adam Krum Pocket Star Green S": { id: "129", size: "00S" },
      "Adam Krum Pocket Star Green M": { id: "130", size: "00M" },
      "Adam Krum Pocket Star Green L": { id: "131", size: "00L" },
      "Adam Krum Pocket Star Green XL": { id: "132", size: "0XL" },
      "Adam Krum Pocket Star Green 2XL": { id: "133", size: "2XL" },
      "Adam Krum Pocket Star Green 3XL": { id: "134", size: "3XL" },
      "Adam Krum Pocket Star Green 4XL": { id: "135", size: "4XL" },
      "Adam Krum Pocket Star Green 5XL": { id: "136", size: "5XL" },
      "Adam Krum Pocket Star Grey S": { id: "137", size: "00S" },
      "Adam Krum Pocket Star Grey M": { id: "138", size: "00M" },
      "Adam Krum Pocket Star Grey L": { id: "139", size: "00L" },
      "Adam Krum Pocket Star Grey XL": { id: "140", size: "0XL" },
      "Adam Krum Pocket Star Grey 2XL": { id: "141", size: "2XL" },
      "Adam Krum Pocket Star Grey 3XL": { id: "142", size: "3XL" },
      "Adam Krum Pocket Star Grey 4XL": { id: "143", size: "4XL" },
      "Adam Krum Pocket Star Grey 5XL": { id: "144", size: "5XL" },
      "Adam Krum Pocket Star Sand S": { id: "145", size: "00S" },
      "Adam Krum Pocket Star Sand M": { id: "146", size: "00M" },
      "Adam Krum Pocket Star Sand L": { id: "147", size: "00L" },
      "Adam Krum Pocket Star Sand XL": { id: "148", size: "0XL" },
      "Adam Krum Pocket Star Sand 2XL": { id: "149", size: "2XL" },
      "Adam Krum Pocket Star Sand 3XL": { id: "150", size: "3XL" },
      "Adam Krum Pocket Star Sand 4XL": { id: "151", size: "4XL" },
      "Adam Krum Pocket Star Sand 5XL": { id: "152", size: "5XL" },
      "American Freedom Eagle White S": { id: "153", size: "00S" },
      "American Freedom Eagle White M": { id: "154", size: "00M" },
      "American Freedom Eagle White L": { id: "155", size: "00L" },
      "American Freedom Eagle White XL": { id: "156", size: "0XL" },
      "American Freedom Eagle White 2XL": { id: "157", size: "2XL" },
      "American Freedom Eagle White 3XL": { id: "158", size: "3XL" },
      "American Freedom Eagle White 4XL": { id: "159", size: "4XL" },
      "American Freedom Eagle White 5XL": { id: "160", size: "5XL" },
    };

    if (shirtMap[name]) {
      return {
        ...shirtMap[name],
        name: name,
        imgUrl: "",
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

      try {
        const response = await fetch(
          "https://ssapi.shipstation.com/orders/createorder",
          requestOptions
        );
        const orderCreated = await response.json();
        console.log("orderCreated", orderCreated);
        return NextResponse.json({ result: orderCreated, ok: true });
      } catch (error) {
        console.log("error", error);

        return NextResponse.json({ result: error, ok: false });
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

    return NextResponse.json({ result: null, ok: false });
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
