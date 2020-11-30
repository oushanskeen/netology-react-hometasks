import "./listing.css";
const etsyData = require("./etsy.json");
console.log("CCCCCCCCCCCCCCC: ", etsyData[0]);
const stubMainImage =
  "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_fullxfull.194524  7446_kh4u.jpg";
const trimmedEtsy = ({
  listing_id,
  url,
  MainImage,
  title,
  currency_code: currency_code,
  price,
  quantity
}) => ({
  listing_id: listing_id,
  url: url,
  MainImage: MainImage === undefined ? stubMainImage : MainImage.url_fullxfull,
  title: title === undefined ? "" : title,
  currency_code: currency_code,
  price: price,
  quantity: quantity
});
console.log(
  "TRIMMED ETSY: ",
  etsyData.map(e => trimmedEtsy(e))
);

const trimTitle = _title =>
  _title.length > 50 ? `${_title.slice(0, 50)}...` : _title;
const chooseCurrency = (_cur, _price) => {
  switch (_cur) {
    case "USD":
      return `$${_price}`;
    case "EUR":
      return `€${_price}`;
    default:
      return `${_price} GBP`;
  }
};
const ListingItem = ({ input }) => (
  <div class="item-list">
    <div class="item">
      <div class="item-image">
        <a href={input.url}>
          <img src={input.MainImage} alt="" />
        </a>
      </div>
      <div class="item-details">
        <p class="item-title">{trimTitle(input.title)}</p>
        <p class="item-price">
          {chooseCurrency(input.currency_code, input.price)}
        </p>
        <p class="item-quantity level-medium">{input.quantity} left</p>
      </div>
    </div>
  </div>
);
export const Listing = () =>
 <div style={{paddingTop:120, marginTop:0}}>{etsyData.map(e => <ListingItem input={trimmedEtsy(e)} />)}</div>;
