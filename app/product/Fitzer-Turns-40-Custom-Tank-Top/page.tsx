"use client";
import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  CheckboxGroup,
  Divider,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { CustomCheckbox } from "@/app/components/customCheckbox.tsx/customCheckbox";
import { AddCart } from "@/app/components/addCart/addCart";
import { NavbarHeader } from "@/app/components/navbar/navbar";
import { useState } from "react";
import { Gallery } from "@/app/components/gallery/gallery";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top M",
        quantity: quantity,
        size: "M",
        priceId: "price_1P8TfnGkWb1Ap7UJFa2Pf421",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top L",
        quantity: quantity,
        size: "L",
        priceId: "price_1P8ThAGkWb1Ap7UJ7eCNM7Ci",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1P8Ti9GkWb1Ap7UJ7nb7fn6Q",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1P8TinGkWb1Ap7UJ4lSQFIjb",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1P8TjHGkWb1Ap7UJcZ47kJEv",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1P8TjfGkWb1Ap7UJsRCL8Dub",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Fitzer Turns 40 Custom Tank Top 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1P8TkYGkWb1Ap7UJJhRRUKjB",
        url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
      };
    }
    // if (selected[0] === "5xl") {
    //   return {
    //     name: "Fitzer Turns 40 Custom Tank Top 5XL TEST",
    //     quantity: quantity,
    //     size: "5XL",
    //     priceId: "price_1P8TuVGkWb1Ap7UJZwZNUWWV",
    //     url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
    //   };
    // }
    return {
      name: "Fitzer Turns 40 Custom Tank Top S",
      quantity: quantity,
      size: "S",
      priceId: "price_1P8Tf4GkWb1Ap7UJlfwC467M",
      url: "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
    };
  };
  const data = [
    "https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png",
    "https://politicozen-prod.s3.us-east-2.amazonaws.com/back.png",
  ];

  return (
    <>
      <main
        style={{
          backgroundColor: "#171717",
          fontFamily: "'Inter',sans-serif",
        }}
        className="grid justify-center h-screen"
      >
        <div
          style={{
            width: "80%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 justify-self-center gap-10"
        >
          <Gallery
            list={data}
            defaultValue="https://politicozen-prod.s3.us-east-2.amazonaws.com/pocket.png"
          />

          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">
                Fitzer Turns 40 Custom Tank Top
              </div>
              <div className="text-lg">$15.99</div>
            </div>
            <Divider className="my-4" />

            <div>
              <CheckboxGroup
                label="Select size"
                value={selected}
                //@ts-ignore
                onChange={(data) => setSelected([data[1]])}
                classNames={{
                  base: "w-full",
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  <CustomCheckbox value="s" size="S" />
                  <CustomCheckbox value="m" size="M" />
                  <CustomCheckbox value="l" size="L" />
                  <CustomCheckbox value="xl" size="XL" />
                  <CustomCheckbox value="2xl" size="2XL" />
                  <CustomCheckbox value="3xl" size="3XL" />
                  <CustomCheckbox value="4xl" size="4XL" />
                  <CustomCheckbox value="5xl" size="5XL" />
                </div>
              </CheckboxGroup>
            </div>
            <Divider className="my-4" />

            <div className="text-medium text-foreground-500">Quantity</div>
            <Input
              type="number"
              // placeholder="1"
              defaultValue="1"
              labelPlacement="outside"
              className="mt-2"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Divider className="my-4" />
            <AddCart product={findProduct()} />
          </div>
        </div>
      </main>
    </>
  );
}
