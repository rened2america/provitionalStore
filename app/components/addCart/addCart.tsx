"use client";
import React from "react";
import { Checkbox, Link, User, Chip, cn, Button } from "@nextui-org/react";
import useStore from "@/app/state/store";

export const AddCart = ({ product }: { product: any }) => {
  const { addProduct, products } = useStore((state) => {
    return { addProduct: state.addProduct, products: state.products };
  });
  console.log(products);
  return (
    <>
      <Button size="lg" onClick={() => addProduct(product)}>
        Add to cart
      </Button>
    </>
  );
};
