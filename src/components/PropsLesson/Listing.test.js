import { shallow } from "enzyme";
import { etsyDataEssence } from "./Listing.jsx";
let etsyData = require("./etsy.json");

const etsyEssence = {
  listingId: 708099714,
  url:
    "https://www.etsy.com/listing/708099714/beautiful-lodolite-quartz-rutile-mix?utm_source=netoapi&utm_medium=api&utm_campaign=api",
  mainImage:
    "https://i.etsystatic.com/16754592/r/il/63cb4f/1945247446/il_fullxfull.1945247446_kh4u.jpg",
  title:
    "Beautiful Lodolite Quartz Rutile Mix Gemstone, 23x18mm, 29Cts Lodolite Quartz Rutile Gemstone, Handmade Jewelry Making Loose Gemstone BB-400",
  currencyCode: "USD",
  price: "15.99",
  quantity: 1
};

describe(`GIVEN etsyDataEssence(<data.json>)
  WHEN called with input json holding data
  THEN it returns only trimmed object with necessary data`, () => {
  it("extracts necessary data", () => {
    expect(etsyDataEssence(etsyData[0])).toEqual(etsyEssence);
  });
});
describe(`GIVEN <ListingItem input={<trimmedJson>}/>
  WHEN called with trimmed json object
  THEN it returns view for shop item with given data`, () => {
  it("extracts", () => {
    expect(etsyDataEssence(etsyData[0])).toEqual(etsyEssence);
  });
});
