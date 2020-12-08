//products";
import { portfolioSampleData } from "./portfolio_sampleData";
import { useState } from "react";

const buttons = ["All", "Websites", "Flayers", "Business Cards"];

export const filterProducts = (_portfolioSampleData, _filterName) =>
  _filterName !== "All"
    ? _portfolioSampleData.filter(e => e.category === _filterName)
    : _portfolioSampleData;
export const Toolbar = () => (
  <div id="toolBar">
    {buttons.map(e => (
      <button onClick={() => console.log(e)} id={e}>
        {e}
      </button>
    ))}
  </div>
);

export const ProjectsList = ({ data }) => (
  <div>
    {data.map(e => (
      <img src={e.img} alt="" />
    ))}
  </div>
);
export const Portfolio = ({ data = portfolioSampleData }) => {
  const [portfolioData, setPortfolioData] = useState(data);
  console.log("Portfolio portfolioData:", portfolioData);
  const Toolbar = () => (
    <div id="toolBar">
      {buttons.map(e => (
        <button
          onClick={() =>
            setPortfolioData(filterProducts(portfolioSampleData, e))
          }
          id={e}
        >
          {e}
        </button>
      ))}
    </div>
  );
  return (
    <div style={{paddingTop:120,marginTop:0}}>
      <Toolbar />
      <ProjectsList data={portfolioData} />
    </div>
  );
};
