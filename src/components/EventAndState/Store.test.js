//import { portfolioSampleData } from "./products";
import { useState } from "react";
import { products } from "./products";
import { shallow } from "enzyme";
console.log(products);

const onSwitchHandler = _swState => (_swState === "list" ? "card" : "list");
const CardItem = ({ name, price, color }) => (
  <>
    <div>{name}</div>
    <div> {price}</div>
    <div> {color}</div>
  </>
);
const ListItem = ({ name, price, color }) => (
  <>
    <div>{name}</div>
    <div> {price}</div>
    <div> {color}</div>
  </>
);
const IconSwitch = ({ icon, onSwitch }) => <div onClick={onSwitch}>{icon}</div>;
const CardsView = ({ data }) => (
  <>
    {data.map(e => (
      <CardItem {...data} />
    ))}
  </>
);
const ListView = ({ data }) => (
  <>
    {data.map(e => (
      <ListItem {...data} />
    ))}
  </>
);
const Store = () => {
  const [iconState, setIconState] = useState("card");
  const onClickHandler = _swState =>
    _swState === "list" ? setIconState("card") : setIconState("list");
  return (
    <>
      <IconSwitch icon={iconState} onSwitch={onClickHandler(iconState)} />
      <>{iconState === "card" ? <CardsView /> : ListView}</>
    </>
  );
};
describe("<ListItem /> and <CardItem />", () => {
  const listWrapper = shallow(<ListItem {...products[0]} />);
  const cardWrapper = shallow(<CardItem {...products[0]} />);
  const textSample = `${products[0].name} ${products[0].price} ${products[0].color}`;
  console.log("List wrapper: ", listWrapper.debug());
  it("both list and card elements shows same sata", () => {
    expect(listWrapper.text()).toEqual(textSample);
    expect(cardWrapper.text()).toEqual(textSample);
  });
});
describe("icon switcher", () => {
  it("emits binary message, 'list' or 'card'", () => {
    const state = "card";
    expect(onSwitchHandler(state)).toEqual("list");
  });
  it("emits binary message", () => {
    const state = "list";
    expect(onSwitchHandler(state)).toEqual("card");
  });
});
