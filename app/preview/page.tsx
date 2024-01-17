"use client";
import { Button, Input } from "@nextui-org/react";
import { Model } from "../components/model/Model";
import { SearchIcon } from "../components/icons/SearchIcon";
import Replicate from "replicate";
import { useState } from "react";

const replicate = new Replicate({
  auth: "r8_4TTqXnlvICrYMqEHzOxPdzyv7iZXRCx1MTCWz",
});

export default function Preview() {
  const [currentImage, setCurrentImage] = useState("");
  const [text, setText] = useState("");
  const getImage = async () => {
    // const model =
    //   "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    // const input = {
    //   prompt:
    //     "an astronaut riding a horse on mars, hd, dramatic lighting, detailed",
    // };
    // const output = await replicate.run(model, { input });
    const path =
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

    const headers = {
      Accept: "application/json",
      Authorization:
        "Bearer sk-JIecRCiT60406koXaPoO1JE1Uqkrl0wLymyjbSQJdL9p9yDA",
    };

    const response = await fetch(
      `https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer sk-JIecRCiT60406koXaPoO1JE1Uqkrl0wLymyjbSQJdL9p9yDA`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: text,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Non-200 response: ${await response.text()}`);
    }

    const responseJSON = await response.json();
    console.log(responseJSON.artifacts[0].base64);
    const base64Response = await fetch(
      `data:image/png;base64,${responseJSON.artifacts[0].base64}`
    );
    const blob = await base64Response.blob();
    console.log(blob);
    const convertBlobToBase64 = (blob: any) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(blob);
      });

    const base64String: any = await convertBlobToBase64(blob);
    setCurrentImage(base64String);
    // setCurrentImage(output[0]);
  };

  return (
    <main
      className=""
      style={{
        position: "relative",
      }}
    >
      <Model image={currentImage} />
      <div
        style={{
          width: "40%",
          position: "absolute",
          top: "500px",
          left: "30%",
          display: "grid",
          gridTemplateColumns: "1fr 80px",
        }}
      >
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <Button onClick={() => getImage()}>Create</Button>
      </div>
    </main>
  );
}
