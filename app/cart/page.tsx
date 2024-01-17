"use client";
import {
  Avatar,
  Chip,
  Divider,
  Input,
  Select,
  SelectItem,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { NavbarHeader } from "@/app/components/navbar/navbar";
import useStore from "../state/store";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Creators() {
  const { products } = useStore((state) => {
    return { products: state.products };
  });
  return (
    <main
      style={{
        backgroundColor: "#171717",
        fontFamily: "'Inter',sans-serif",
      }}
      className="h-screen"
    >
      <NavbarHeader />

      <div className="w-screen grid justify-center">
        {products.map((product) => {
          return (
            <>
              <Card>
                <div className="w-96 p-4 flex justify-between gap-2">
                  <User
                    avatarProps={{ size: "md", src: product.url }}
                    description={<div>Size: {product.size}</div>}
                    name={product.name}
                  />
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-tiny text-default-500">Quantity</span>
                    <Chip color="primary" size="sm" variant="flat">
                      {product.quantity}
                    </Chip>
                  </div>
                </div>
              </Card>
              <Divider className="my-4" />
            </>
          );
        })}
        <Button
          onClick={async () => {
            const response = await fetch("api/checkout/", {
              method: "post",
              body: JSON.stringify({ itineraryId: "ok" }),
            });
            console.log(response);
          }}
        >
          Buy
        </Button>
      </div>
    </main>
  );
}
