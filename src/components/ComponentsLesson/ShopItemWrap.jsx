import React from "react";
import "../../css/main.css";
import { ShopItemFunc } from "./ShopItemFunc.jsx";
import { ShopItemClass } from "./ShopItemClass.jsx";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a   stand-up collar, concealed front closure and single back vent. Slim fit wit  h clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£"
};

export const ShopItemWrap = ({type}) => (
  <div className="container">
    <div className="background-element"></div>
    <div className="highlight-window">
      <div className="highlight-overlay"></div>
    </div>
    <div className="window">
    {
      type === "fc"
      ? <ShopItemFunc item={item}/>
      : <ShopItemClass item={item}/>
    }
    </div>
  </div>
);
