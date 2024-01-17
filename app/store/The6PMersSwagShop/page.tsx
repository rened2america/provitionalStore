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
      <NavbarHeader />
      <div
        style={{
          padding: "42px 72px 58px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          position: "relative",
        }}
      >
        <img
          src="/6PMers.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            background:
              "linear-gradient(180deg,hsla(0,0%,9%,.4),#171717 100%,#171717 0)",
            backdropFilter: "blur(5px)",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            zIndex: "2",
            display: "flex",
            width: "100%",
          }}
        >
          <button
            className={inter.className}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
            }}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
            >
              <path
                fill="#FAFAFA"
                fill-rule="evenodd"
                d="M13.333 8a.667.667 0 0 1-.666.666H3.333a.667.667 0 1 1 0-1.333h9.334c.368 0 .666.299.666.667Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#FAFAFA"
                fill-rule="evenodd"
                d="M8.471 13.138a.667.667 0 0 1-.942 0L2.862 8.472a.667.667 0 0 1 0-.943l4.667-4.667a.667.667 0 1 1 .942.943L4.276 8l4.195 4.195c.26.26.26.683 0 .943Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Back
          </button>
        </div>
        <div
          style={{
            width: "180px",
            height: "180px",
            zIndex: "2",
          }}
        >
          <Image src="/6PMers.jpg" width="180" height="180" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4px",
            color: "#fff",
            zIndex: "2",
          }}
        >
          <h1
            className={inter.className}
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              lineHeight: "2rem",
            }}
          >
            The6PMersSwagShop
          </h1>
          <p
            className={inter.className}
            style={{
              fontWeight: "400",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: "1.8rem",
            }}
          >
            Welcome to our Merch shop, where every 6PM enthusiast will find
            their perfect match in our club collection tees!{" "}
          </p>
          <p
            className={inter.className}
            style={{
              fontWeight: "400",
              fontSize: "0.9rem",
              lineHeight: "1.8rem",
              color: "#a3a3a3",
            }}
          >
            Shirt
          </p>
        </div>
      </div>
      <section
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        {" "}
        <div className="max-w-[900px] gap-2 grid grid-cols-12 px-8 pb-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <Link href={"/product/Re-Social-White-T-shirt"}>
              <CardHeader className="absolute z-10 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-slate-900/60 uppercase font-bold text-xs`}
                >
                  Go to buy
                </p>
                <h4
                  className={`${interProducts.variable} font-sans text-slate-900 font-medium text-base`}
                >
                  Re-Social White T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/product1.jpg"
              />
            </Link>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <Link href={"/product/6-PMers-Black-T-shirt"}>
              <CardHeader className="absolute z-10 top-0 flex-col !items-start bg-white/30">
                <p
                  className={`${interProducts.variable} text-xs text-slate-900/70 uppercase font-bold`}
                >
                  Go to buy
                </p>
                <h4
                  className={`${interProducts.variable} font-sans text-slate-900 font-medium text-base`}
                >
                  6 PMers Black T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/product2.jpg"
              />
            </Link>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <Link href={"/product/6PM-Somewhere-Black-T-shirt"}>
              <CardHeader className="absolute z-10 top-1 flex-col !items-start bg-white/30">
                <p className="text-tiny text-black/60 uppercase font-bold">
                  Go to buy
                </p>
                <h4
                  className={`${interProducts.variable} font-sans text-slate-900 font-medium text-base`}
                >
                  It&apos;s 6PM Somewhere Black T-shirt
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="/product3.jpg"
              />
            </Link>
          </Card>
        </div>
      </section>
    </main>
  );
}
