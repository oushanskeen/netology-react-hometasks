const box = {
  display: "flex",
  border: "1px solid white",
  //margin: 0,
  //padding: 10,
  background: "white"
};
const boxCol = { ...box, flexDirection: "column" };
const miscCol = { ...boxCol, padding: 10 };
const icon = { width: "15px", height: "15px", background: "grey" };
const centCol = { padding: "5px 0px 5px 100px " };
const startCol = { paddingLeft: "10px" };

// строка поиска и немного развлечений вокруг неё
export const Search = ({searchData}) => {
  const YouCanDo = ({data}) => (
    <div
      style={{
        ...box,
        ...centCol,
        paddingRight: "100px",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      {data.map(e => (
        <div className="search_youcando">{e.linkName}</div>
      ))}
    </div>
  );
  const SearchBar = ({data}) => (
    <div style={{ ...box }}>
      <h3 style={{ ...box, color: "red", width: "10%" }}>Yandex</h3>
      <div style={{ ...box, width: "90%", border: "2px solid gold" }}>
        <div style={{ ...box, width: "90%" }}>
          <input style={{ height: "100%", margin: 0 }} />
          <span> keyboard </span>
        </div>
        <div style={{ ...box, width: "10%" }}>
          <button style={{ background: "gold", color: "black" }}>search</button>
        </div>
      </div>
    </div>
  );
  const SearchMotivation = ({data}) => (
    <div style={{ ...box, padding: "5px 100px" }}>
      <div>Найдётся всё, например ФАЗЫ ЛУНЫ СЕГОДНЯ</div>
    </div>
  );
  const Banner = ({data}) => (
    <img
      alt="Banner img"
      style={{
        background: "darkGrey",
        height: "150px",
        margin: "0px 100px"
      }}
    />
  );
  return (
    <div style={boxCol}>
      <YouCanDo data={searchData.youcando}/>
      <div style={boxCol}>
        <SearchBar data={searchData.search}/>
        <SearchMotivation data={searchData.motivation}/>
        <Banner data={searchData.banner}/>
      </div>
    </div>
  );
};
