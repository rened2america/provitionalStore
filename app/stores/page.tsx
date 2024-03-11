"use client";
// import { CartStore } from 'components/cartstore/cart-store';
import { CartStore } from "../components/cartstore/cart-store";
export default function Stores() {
  return (
    <div
      style={{
        // height: "100vh",
        padding: "48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        justifyItems: "center",
      }}
    >
      <CartStore
        urlBg="/6PMers.jpg"
        fUrlImg="/product_two.jpg"
        sUrlImg="/product_three.jpg"
        tUrlImg="/product_one.jpg"
        urlRedirect="/store/The6PMersSwagShop"
      />
      <CartStore
        urlBg="/adam/ADAMB.png"
        fUrlImg="/adam/classicLogoGrey.jpg"
        sUrlImg="/adam/classicLogoWhite.jpg"
        tUrlImg="/adam/guitarLogoGreen.jpg"
        urlRedirect="/store/AdamKrum"
      />
      <CartStore
        urlBg="/2A/2AFB.png"
        fUrlImg="/2A/2AAfWhite.jpg"
        sUrlImg="/2A/AFEagleWhite.jpg"
        tUrlImg="/2A/2ndAmendmentAFWhite.jpg"
        urlRedirect="/store/2AAmericanFreedom"
      />
    </div>
  );
}
