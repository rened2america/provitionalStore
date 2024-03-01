import { Carousel } from "./components/carousel";
import { ThreeItemGrid } from "./components/grid/three-items";
import { ThreeItemGridStores } from "./components/gridStore/three-items-store";

import { Suspense } from "react";
export const runtime = "edge";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <>
      <div
        style={{
          filter: "grayscale(50%)",
        }}
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src="/01.webp" alt="" />
        </div>
      </div>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
      </Suspense>
      <ThreeItemGridStores />

      <section className="bg-white dark:bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-900">
              Connect with Your Audience through Social Media
            </h2>
            <p className="mb-4">
              Amplify your reach by linking your Merchlife store with your
              social media profiles. Engage directly with your fans and
              followers, and watch as your creations capture hearts and minds
              across platforms.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="socialmedia.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="mt-8 grid grid-cols-2 gap-4">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full rounded-lg lg:mt-10"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Free to Start, Boundless Opportunities
            </h2>
            <p className="mb-4">
              Dive in without any upfront costs. Our platform is built on the
              belief that your creativity should be your only investment. Earn a
              competitive commission on every sale as your creations capture the
              market.
            </p>
          </div>
        </div>
      </section>
      <div className="grid">
        <div className="block bg-white dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src="/bg.png" alt="" height="300" />
          </div>
          <div
            style={{
              backgroundColor: "white",
            }}
            className="p-6"
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <h2 className="mb-2 pb-4 text-5xl font-bold leading-tight text-neutral-950">
                How it works: Create, Connect, Succeed
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "24px",
              }}
              className="text-neutral-700"
            >
              <div className="bg-card rounded-xl">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="rounded-t-lg" src="/create.jpg" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="p-6 text-center text-2xl font-medium tracking-tight">
                    Create
                  </h3>

                  <div className="text-lg">
                    Let your imagination run wild. Our platform is your canvas
                    for next-level product designs.
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="rounded-t-lg" src="/connect.jpg" alt="" />
                </div>
                <div className="p-6 ">
                  <h3 className="p-6 text-center text-2xl font-medium tracking-tight">
                    Connect
                  </h3>

                  <div className="text-lg">
                    Leverage the power of social media. Share your story and
                    products with a global audience.
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img className="rounded-t-lg" src="/succeed.jpg" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="p-6 text-center text-2xl font-medium tracking-tight">
                    Succeed
                  </h3>

                  <div className="text-lg">
                    Enjoy the satisfaction of each sale. Grow your brand and
                    income as your fanbase expands.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center px-4 py-8 lg:px-6 lg:py-16">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Support Every Step of the Way
            </h2>
            <p className="mb-4">
              Whether you need creative guidance or technical support, our teams
              are here to ensure a smooth, enjoyable experience. From concept to
              customer, we&apos;re with you at every step.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
