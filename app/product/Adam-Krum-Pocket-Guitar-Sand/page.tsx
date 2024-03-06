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
        name: "Adam Krum Pocket Guitar Sand M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OoncKGkWb1Ap7UJDntCC23d",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "Adam Krum Pocket Guitar Sand L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OoncxGkWb1Ap7UJfQTSH0SN",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "Adam Krum Pocket Guitar Sand XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1OondSGkWb1Ap7UJMqVFwwTv",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "Adam Krum Pocket Guitar Sand 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OonedGkWb1Ap7UJ9qxdFqur",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "Adam Krum Pocket Guitar Sand 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1Oonf3GkWb1Ap7UJPyS0JfDk",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "Adam Krum Pocket Guitar Sand 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OonfpGkWb1Ap7UJMzpqIXOF",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "Adam Krum Pocket Guitar Sand 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OongJGkWb1Ap7UJaPT6ZaoR",
        url: "/adam/guitarLogoSand.jpg",
      };
    }
    return {
      name: "Adam Krum Pocket Guitar Sand S",
      quantity: quantity,
      size: "S",
      priceId: "price_1Oonh1GkWb1Ap7UJbvXJwnFg",
      url: "/adam/guitarLogoSand.jpg",
    };
  };
  const data = ["/adam/guitarLogoSand.jpg", "/adam/guitarLogoSandB.jpg"];

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
          <Gallery list={data} defaultValue="/adam/guitarLogoSand.jpg" />

          <div>
            <div className="grid grid-cols-4">
              <div className="text-xl col-span-3">Adam Krum Guitar Sand</div>
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
