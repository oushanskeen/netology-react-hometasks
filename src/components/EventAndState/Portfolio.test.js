//import { portfolioSampleData } from "./
//products";
import { portfolioSampleData } from "./portfolio_sampleData";
import { useState } from "react";
import { shallow } from "enzyme";
//console.log(portfolioSampleData.length);

export const log = logMsg => console.log(logMsg);
const buttons = ["All", "Websites", "Flayers", "Business Cards"];
const Toolbar = () => (
  <div id="toolBar">
    {buttons.map(e => (
      <button onClick={e} id={e}>
        {e}
      </button>
    ))}
  </div>
);
const filterProducts = (_portfolioSampleData, _filterName) => {
  //return _portfolioSampleData.filter(e => _portfolioSampleData.category ===[_filterName]);
  return _portfolioSampleData.filter(e =>
    _filterName ? e.category === _filterName : e
  );
  //console.log("FILTER IS GIVEN: ", _filterName);
  return _portfolioSampleData.filter(e => e);
};
//console.log(
  //"filtered websites",
  //filterProducts(portfolioSampleData, "Websites")
//);

const ProjectsList = ({ data }) => (
  <div>
    {data.map(e => (
      <img src={e.img} alt="" />
    ))}
  </div>
);
const Portfolio = ({ data }) => {
  const [portfolioData, setPortfolioData] = useState(data);

  return (
    <>
      <Toolbar />
      <ProjectsList data={data} />
    </>
  );
};

describe("No filter", () => {
  it("GIVEN no filter props, WHEN called with data, THEN it returns all elements", () => {
    expect(filterProducts(portfolioSampleData).length).toEqual(17);
  });
  it("GIVEN filtere websites prop, WHEN called with data, THEN it returns only websites", () => {
    expect(filterProducts(portfolioSampleData, "Websites").length).toEqual(10);
  });
  it("GIVEN no flayers props, WHEN called with data, THEN it returns all elements", () => {
    expect(filterProducts(portfolioSampleData, "Flayers").length).toEqual(2);
  });
  it("GIVEN no busidness cards props, WHEN called with data, THEN it returns all elements", () => {
    expect(
      filterProducts(portfolioSampleData, "Business Cards").length
    ).toEqual(5);
  });
});
describe("<Toolbar/>", () => {
  const wrapper = shallow(<Toolbar />);
  it("consists of four buttons", () => {
    console.log("<Toolbar />:", wrapper.debug());
    expect(wrapper.find("button")).toHaveLength(4);
  });
  buttons.map(e =>
    it(`makes button emitting same text as its name`, () => {
      "";
    })
  );
  /*
  it('console.log action name when relevan button is pressed', () => {
    //console.log = jest.fn();
    //log("hello")a
    // The first argument of the first call to the function was 'hello'
    //expect(console.log).toHaveBeenCalledWith("hello");
    
  });
  */
});
describe("button clicks", () => {
  const wrapper = shallow(<Portfolio data={portfolioSampleData} />);
  //console.log("<Portfolio default load/> : ", wrapper.debug());
  it("on load all items are visible", () => {
    expect(wrapper.children()).toHaveLength(2);
  });
  it("when website button clicked <ProjectsList /> shows oly websites",()=>{
    console.log("ON BUTTOn TEST ",wrapper.children(0).debug());
    expect(wrapper.children().children()).toHaveLength(4);
    console.log("ON BUTTOn TEST ",wrapper.debug());
  })
});
describe("<ProjectsList />", () => {
  const wrapper = shallow(<ProjectsList data={portfolioSampleData} />);
  //console.log("<ProjectsList /> : ", wrapper.debug());
  it("GIVEN array of elements THEN it shows its img", () => {
    expect(wrapper.children()).toHaveLength(portfolioSampleData.length);
  });
});
