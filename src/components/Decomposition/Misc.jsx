const box = {
  display: "flex",
  border: "1px solid white",
  background: "white"
};
const boxCol = { ...box, flexDirection: "column" };
const miscCol = { ...boxCol, padding: 10 };
const icon = { width: "15px", height: "15px", background: "grey" };
const centCol = { padding: "5px 0px 5px 100px " };
const startCol = { paddingLeft: "10px" };

// не понял чем определённым занимается компонент под строкой поиска
// и сложил туда всё подряд
export const Misc = ({ miscData }) => {
  const Pogoda = ({data}) => (
    <div style={miscCol}>
      <h4>
        <a href="somewhere">Pogoda</a>
      </h4>
      <div>
        <div>
          <span style={{ ...icon, color: "lightGrey" }}>cloud</span>
          <h2>+17C</h2>
        </div>
        <div>Utrom +17, Dnem +20</div>
      </div>
    </div>
  );
  const Visited = ({data}) => (
    <div style={miscCol}>
      <h4>
        <a href="somewhere">Посещаемое</a>
      </h4>
      <div>
        <b>Дома</b> - в которых живут
      </div>
      <div>
        <b>Магазин</b> - где свет и тепло
      </div>
      <div>
        <b>Машины</b> - они ездят
      </div>
    </div>
  );
  const Map = ({data}) => (
    <div style={{ ...box, miscCol }}>
      <h4>
        <a href="somewhere">Karta Germanii</a>
      </h4>
      <div>Там где можно ходить</div>
    </div>
  );
  const Tvprog = ({data}) => (
    <div style={miscCol}>
      <span>
        <h4>Teleprogramma</h4>
        <button>Ephyr</button>
      </span>
      <div>
        <div>02:00 TNT.Best. TNT International</div>
        <div>02:15 Jungle. TNT Karu Int</div>
        <div>02:25 Home alone. Alone Tv</div>
      </div>
    </div>
  );
  const Ephyr = ({data}) => (
    <div style={miscCol}>
      <div>Ephyr</div>
      <div>
        <div style={{ ...box, width: "100%" }}>
          <button style={icon}>play</button>
          Watching as art. #success
        </div>
        <div>
          <button style={icon}>play</button>Nigth.When world sleeps. #earth
        </div>
        <div>
          <button style={icon}>play</button>Someone. #people
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ ...box, ...centCol }}>
      <div style={{ ...boxCol }}>
        <Pogoda data={miscData.pogoda}/>
        <Visited data={miscData.visited}/>
      </div>
      <div style={{ ...boxCol }}>
        <Map data={miscData.map}/>
        <Tvprog data={miscData.tvprog}/>
      </div>
      <div style={{ ...boxCol }}>
        <Ephyr data={miscData.ephyr}/>
      </div>
    </div>
  );
};
