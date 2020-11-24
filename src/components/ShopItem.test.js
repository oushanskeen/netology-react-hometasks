import React from "react";
import { shallow /*, mount*/ } from "enzyme";
import PropTypes from "prop-types";
import "../css/main.css";

const item = {
  brand: "Tiger of Sweden",
  title: "Leonard coat",
  description: "Minimalistic coat in cotton-blend",
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: "£"
};
const emptyItem = {};

export const ShopItemFunc = ({ item }) => {
  return item === undefined || Object.keys(item).length !== 6 ? (
    <div>Pardon, something goes wrong!</div>
  ) : (
    <>
      <h2 id="brand">{item.brand}</h2>
      <h1 id="title">{item.title}</h1>
      <h3 id="descriptionBrief">{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="price">
        {item.currency}
        {item.price}.00
      </div>
    </>
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
}
ShopItemFunc.defaulrProps = {
  item: {
    brand: "Pardon",
    title: "moi!",
    description: "Something",
    descriptionFull: "goes",
    price: "!",
    currency: "wrong"
  }
}

describe("<ShopItemFunc/> with no given props", () => {
  it("renders pardon message with no give props", () => {
    const wrapper = shallow(<ShopItemFunc />);
    console.log(wrapper.debug());
  });
  it("renders pardon message with no given props", () => {
    const wrapper = shallow(<ShopItemFunc item={emptyItem} />);
    console.log(wrapper.debug());
  });
});

describe("<ShopItemFunc/> with data", () => {
  // init shallow component
  const wrapper = shallow(<ShopItemFunc item={item} />);
  console.log(wrapper.debug());

  // brand
  it("has h2 tag for brand name", () => {
    expect(wrapper.find("#brand").type()).toEqual("h2");
  });
  it("renders brand name taken from item props", () => {
    expect(wrapper.find("#brand").text()).toEqual(item.brand);
  });

  // title
  it("has h1 tag for item name", () => {
    expect(wrapper.find("#title").type()).toEqual("h1");
  });
  it("renders title name taken from item props", () => {
    expect(wrapper.find("#title").text()).toEqual(item.title);
  });

  // short description
  it("has h3 tag for (short) description", () => {
    expect(wrapper.find("#descriptionBrief").type()).toEqual("h3");
  });
  it("renders (short) description taken from item props", () => {
    expect(wrapper.find("#descriptionBrief").text()).toEqual(item.description);
  });
  // short description
  it("has h3 tag for (short) description", () => {
    expect(wrapper.find("#descriptionBrief").type()).toEqual("h3");
  });
  it("renders (short) description taken from item props", () => {
    expect(wrapper.find("#descriptionBrief").text()).toEqual(item.description);
  });

  // full description
  it("has its own div for (full) description", () => {
    expect(wrapper.find(".description").type()).toEqual("div");
  });
  it("renders (full) description taken from item props", () => {
    expect(wrapper.find(".description").text()).toEqual(item.descriptionFull);
  });

  // price and currency
  it("has its own div for (full) price", () => {
    expect(wrapper.find(".price").type()).toEqual("div");
  });
  it(`renders currency plus price taken from item props; 
      currency prepended by price followed by dot and 00`, () => {
    expect(wrapper.find(".price").text()).toEqual(
      `${item.currency}${item.price}.00`
    );
  });
});

