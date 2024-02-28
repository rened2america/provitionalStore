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
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "American Freedom Eagle White M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OoltCGkWb1Ap7UJfBWPbR0y",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "American Freedom Eagle White L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OoluCGkWb1Ap7UJszezKclt",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "American Freedom Eagle White XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1OolumGkWb1Ap7UJXoQI1Xfx",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "American Freedom Eagle White 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OolvLGkWb1Ap7UJCPBp4Win",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "American Freedom Eagle White 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OolvlGkWb1Ap7UJ1vBPAT7m",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "American Freedom Eagle White 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OolwLGkWb1Ap7UJVK2159Kb",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "American Freedom Eagle White 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1Oolx1GkWb1Ap7UJBbOBLdL4",
        url: "/2A/AFEagleWhite.jpg",
      };
    }
    return {
      name: "American Freedom Eagle White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OolxWGkWb1Ap7UJyYizjRqy",
      url: "/2A/AFEagleWhite.jpg",
    };
  };

  return (
    <>
      <NavbarHeader />
      <main
        style={{
          backgroundColor: "#171717",
          fontFamily: "'Inter',sans-serif",
        }}
        className="grid justify-center h-screen"
      >
        <div
          style={{
            width: "90%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 justify-self-center gap-10"
        >
          <Image src="/2A/AFEagleWhite.jpg" width="350" />
          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">
                American Freedom Eagle White
              </div>
              <div className="text-lg">$24.5</div>
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
