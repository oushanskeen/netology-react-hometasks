//import { portfolioSampleData } from "./products";
import { useState } from "react";
import { products } from "./products";
console.log("PRODUCTS: ", products);

const onSwitchHandler = _swState => (_swState === "list" ? "card" : "list");
const CardItem = ({ img, name, price, color }) => (
  <>
    <img src={img} alt="" />
    <div>{name}</div>
    <div> {price}</div>
    <div> {color}</div>
  </>
);
const ListItem = ({ img, name, price, color }) => (
  <>
    <img src={img} alt="" />
    <div>{name}</div>
    <div> {price}</div>
    <div> {color}</div>
  </>
);
const IconSwitch = ({ icon, onSwitch }) => <div onClick={onSwitch}>{icon}</div>;
const CardsView = ({ data }) => (
  <div style={{display:"flex",width:"100%", flexWrap:"wrap"}}>
    {data.map(e => (
      <CardItem {...e} />
    ))}
  </div>
);
const ListView = ({ data }) => (
  <div>
    {data.map(e => (
      <ListItem {...e} />
    ))}
  </div>
);
/*   <IconSwitch icon={iconState} onSwitch={onClickHandler(iconState)} />
      <>{iconState === "card" ? <CardsView /> : ListView}</>
      */
export const Store = () => {
  const [iconState, setIconState] = useState("card");
  const onClickHandler = _swState =>
    _swState === "list" ? setIconState("card") : setIconState("list");
  return (
    <div style={{paddingTop:120,margin:0}}>
      <button
        onClick={() =>
          iconState === "card" ? setIconState("list") : setIconState("card")
        }
      >{iconState}</button>
      <div>
        {iconState === "card" ? (
          <CardsView data={products} />
        ) : (
          <ListView data={products} />
        )}
      </div>
    </div>
  );
};
