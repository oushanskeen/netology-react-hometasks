import React from "react";
import PropTypes from "prop-types";
import "../css/main.css";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a   stand-up collar, concealed front closure and single back vent. Slim fit wit  h clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£"
};

const ShopItemFunc = ({ item }) => {
  return item === undefined || Object.keys(item).length !== 6 ? (
    <div>Pardon, something goes wrong!</div>
  ) : (
    <div class="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">{item.descriptionFull}</div>
      <div class="highlight-window mobile">
        <div class="highlight-overlay"></div>
      </div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">
          {item.currency}
          {item.price}.00
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export const ShopItemFuncOutput = () => (
  <div className="container">
    <div className="background-element"></div>
    <div className="highlight-window">
      <div className="highlight-overlay"></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
);
ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  })
};

ShopItemFunc.defaultProps = {
  item: { ...item }
};
