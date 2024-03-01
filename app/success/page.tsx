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
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { NavbarHeader } from "@/app/components/navbar/navbar";
import { FacebookIcon } from "@/app/components/icons/facebookIcon";
import { InstagramIcon } from "@/app/components/icons/InstagramIcon";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Creators() {
  return (
    <main
      style={{
        backgroundColor: "#171717",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <section
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            justifyItems: "center",
          }}
          className="max-w-[900px] gap-2 grid grid-rows-12 px-8 pb-8"
        >
          <div>Succes</div>
          <div
            style={{
              fontSize: "1.6rem",
            }}
          >
            Your order has been placed
          </div>
        </div>
      </section>
    </main>
  );
}
