import React from "react";
import PropTypes from "prop-types";
import "../../css/main.css";

export const ShopItemFunc = ({ item }) => {
  return item === undefined || Object.keys(item).length !== 6 ? (
    <div>Pardon, something goes wrong!</div>
  ) : (
    <div className="main-content">
      <h2 id="brand">{item.brand}</h2>
      <h1 id="title">{item.title}</h1>
      <h3 id="descriptionBrief">{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {item.currency}
          {item.price}.00
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

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
  item: {
    brand: "Pardon",
    title: "moi!",
    description: "Something",
    descriptionFull: "goes",
    price: 404,
    currency: ""
  }
};
