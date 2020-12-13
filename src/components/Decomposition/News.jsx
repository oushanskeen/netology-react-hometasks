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

// показывает заголовки из новостей, новости валют/нефти и ещё ято-то непонятное
// не смог понять логику этого куска 
export const News = ({ newsData }) => {
  const NewsHead = ({ data }) => (
    <div className="news_head" style={{ ...box, ...centCol }}>
      {data.map(e => (
        <a href={e.link} style={{ paddingLeft: 15 }}>
          {e.name}
        </a>
      ))}
    </div>
  );
  const NewsBody = ({ data }) => {
    const Icon = ({ url, alt }) => <img style={icon} alt={alt} />;
    return (
      <div
        className="news_body"
        style={{ ...box, ...centCol, flexDirection: "column" }}
      >
        {data.map(e => (
          <div>
            <Icon /> {e.text}
          </div>
        ))}
      </div>
    );
  };
  const NewsFoot = ({ data }) => (
    <div className="news_foot" style={{ ...box, ...centCol }}>
      {data.map(e => (
        <span style={{ padding: 5 }}>
          {e.currency} {e.value[0]}
          <span style={{ color: "grey" }}> {e.value[1]} </span>
        </span>
      ))}
    </div>
  );
  const NewsRight = ({ data }) => (
    <div className="news_right" style={{ ...boxCol, ...startCol }}>
      <img
        style={{
          ...box,
          background: "darkGrey",
          width: 100,
          height: 100,
          margin: "10px 0px",
          padding: 0
        }}
        alt="right panel"
      />
      <h4>
        <a href="somewhere" style={{ padding: 0 }}>
          Работай работу
        </a>
      </h4>
      <div>Смотри как это делать</div>
    </div>
  );
  return (
    <div style={{ ...box, flexDirection: "column" }}>
      <NewsHead data={newsData.head} />
      <div style={box}>
        <div style={{ ...boxCol, width: "66%" }}>
          <NewsBody data={newsData.body} />
          <NewsFoot data={newsData.foot} />
        </div>
        <NewsRight data={newsData.right} />
      </div>
    </div>
  );
};
