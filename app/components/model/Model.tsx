"use client";

import {
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Shirt } from "../models/shirt";

export const Model = ({ image }: { image: string }) => {
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      orthographic
      // camera={{ position: [0, 0, 2.5], fov: 25, zoom: 400 }}
      camera={{
        position: [0, 0, 2.5],
        fov: 25,
        zoom: 500,
      }}
      style={{ background: "#f2f4f7", borderRadius: "32px", height: "600px" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[10, 10, 10]} />
      <Environment preset="city" />
      <Shirt image={image} scale={2} position={[0, 0, 0]} />
      <AccumulativeShadows
        temporal
        frames={100}
        alphaTest={0.95}
        opacity={1}
        scale={25}
        position={[0, -1, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={10}
          ambient={0.7}
          intensity={1}
          position={[10, 10, -5]}
          bias={0.01}
          size={10}
        />
      </AccumulativeShadows>
      {/* <OrbitControls makeDefault /> */}
      {/* <color attach="background" args={[]} /> */}
    </Canvas>
  );
};
