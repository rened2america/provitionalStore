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
        name: "Adam Krum Pocket Classic Black M",
        quantity: quantity,
        size: "M",
        priceId: "price_1Oom70GkWb1Ap7UJoI7Terxu",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Pocket Classic Black L",
        quantity: quantity,
        size: "L",
        priceId: "price_1Oom86GkWb1Ap7UJChWaAtmK",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Pocket Classic Black XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Oom8gGkWb1Ap7UJDqhdjGTk",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Pocket Classic Black 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OomXlGkWb1Ap7UJcECIYDMA",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Pocket Classic Black 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OomfFGkWb1Ap7UJIqaYAxtQ",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Pocket Classic Black 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OomfpGkWb1Ap7UJhXwAQAkO",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Pocket Classic Black 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OomgKGkWb1Ap7UJAzQfXiLW",
        url: "/adam/classicLogoBlack.jpg",
      };
    }
    return {
      name: "Adam Krum Pocket Classic Black S",
      quantity: quantity,
      size: "S",
      priceId: "price_1Oomh6GkWb1Ap7UJ8nTcoqXP",
      url: "/adam/classicLogoBlack.jpg",
    };
  };

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
            width: "90%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 justify-self-center gap-10"
        >
          <Image src="/adam/classicLogoBlack.jpg" width="350" />
          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">
                Adam Krum Pocket Classic Black
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
