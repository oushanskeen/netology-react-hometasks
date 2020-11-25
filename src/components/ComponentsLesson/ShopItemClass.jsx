import React from "react";
import PropTypes from "prop-types";
import "../../css/main.css";

export class ShopItemClass extends React.Component {
  render() {
    return this.props.item === undefined 
      || Object.keys(this.props.item).length !== 6 ? (
      <div>Pardon, something goes wrong!</div>
    ) : (
      <div class="main-content">
        <h2 id="brand">{this.props.item.brand}</h2>
        <h1 id="title">{this.props.item.title}</h1>
        <h3 id="descriptionBrief">{this.props.item.description}</h3>
        <div className="description">{this.props.item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">
            {this.props.item.currency}
            {this.props.item.price}.00
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
  })
};

ShopItemClass.defaultProps = {
  item: {
    brand: "Pardon",
    title: "moi!",
    description: "Something",
    descriptionFull: "goes",
    price: 404,
    currency: ""
  }
};
