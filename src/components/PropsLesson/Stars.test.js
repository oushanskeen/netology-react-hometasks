import { SvgStar, SimpleStarMapper, Stars } from "./Stars.jsx";
import { shallow } from "enzyme";

describe(`<SvgStar/>
  GIVEN <SvgsStar />
  WHEN called
  THEN returns svg star wrapped in li html tag`, () => {
  const wrapper = shallow(<SvgStar />);
  //console.log("<SvgStar/> returns", wrapper.debug());
  it("is li html tag wrapper", () => {
    expect(wrapper.find(".star-elem").type()).toEqual("li");
  });
});
describe(`<SimpleStarMapper num={<num>}/>
  GIVEN <SimpleStarMapper/>
  WHEN called with number in num props
  THEN returns (num * <SvgStar/>s ) wrapped in ul html tag`, () => {
  [1, 2, 3, 4, 5].map(e => {
    it(`renders ${e} li elements provided in props`, () => {
      const wrapper = shallow(<SimpleStarMapper num={e} />);
      //console.log(wrapper.debug());
      expect(wrapper.find(".card-body-stars").children()).toHaveLength(e);
    });
    return 0;
  });
});
describe(`<Stars count={<num>}/>
  GIVEN <Stars />
  WHEN called with number in count props
  THEN if num is from 1 to 5 then 
    it returns relevant amount of stars
    otherwise it returns empty element`, () => {
  [1, 2, 3, 4, 5].map(e => {
    it(`given ${e}, returns ${e} star(s)`, () => {
      const wrapper = shallow(<Stars count={e} />);
      //console.log(`<Star count={${e}}/> gives: `, wrapper.dive().children().debug());
      expect(wrapper.dive().children()).toHaveLength(e);
    });
  });
  [0, 6, "1"].map(e => {
    it(`given number < 1 or > 6 or notNumber, returns empty element `, () => {
      const wrapper = shallow(<Stars count={0} />);
      //console.log("wrapper with 0 input: ");
      //console.log(wrapperi.debug());
      expect(wrapper.children()).toHaveLength(0);
    });
  });
});
