import { News } from "./News.jsx";
import { Search } from "./Search.jsx";
import {Misc} from "./Misc.jsx";

const sampleData = {
  news: {
    head: [
      { link: "", name: "Сейчас в СМИ" },
      { link: "", name: "в Германии" },
      { link: "", name: "рекомендуем" },
      { link: "", name: "31 июля среда 02:23" }
    ],
    body: [
      { icon: "сми1", text: "Кто-то упростил получение автомобильных номеров" },
      { icon: "сми2", text: "У команде кого-то раскрыли план реформы чего-то" },
      { icon: "сми3", text: "Кто-то прокомментировал какое-то событие где-то" },
      {
        icon: "сми4",
        text: "Кто-то что-то сделал с кем-то которые где-то, а не тут"
      },
      { icon: "сми5", text: "Где-то спросили что-то из одногго места в другое" }
    ],
    foot: [
      { currency: "USD MOEX", value: ["64,52", "+0,09"] },
      { currency: "EUR MOEX", value: ["70,86", "+0,14"] },
      { currency: "НЕФТЬ", value: ["64,90", "+0,63%"] }
    ],
    rightPanel: {
      image: "",
      linkName: "",
      linkUrl: "",
      linkAnnotate: ""
    }
  },
  search: {
    youcando: [
      { linkUrl: "l1", linkName: "Видео" },
      { linkUrl: "l2", linkName: "Картинки" },
      { linkUrl: "l3", linkName: "Новости" },
      { linkUrl: "l4", linkName: "Карты" },
      { linkUrl: "l5", linkName: "Маркет" },
      { linkUrl: "l6", linkName: "Переводчик" },
      { linkUrl: "l7", linkName: "Эфир" },
      { linkUrl: "l8", linkName: "ещё" }
    ],
    search: {
      logo: "Yandex",
      bar: "_________________________",
      barFoot: ""
    },
    motivation: {},
    banner: {},
    foot: ""
  },
  misc: {
    weather: "",
    othersDo: "",
    map: "",
    TVprog: "",
    wathcMe: ""
  }
};

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

// гланый компонент страницы
export const Yandex = ({ data = sampleData }) => (
  <div
    style={{
      ...box,
      paddingTop: 150,
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    <div style={{ ...boxCol, padding: "10px 100px" }}>
      <News newsData={data.news} />
      <Search searchData={data.search} />
      <Misc miscData={data.misc}/>
    </div>
  </div>
);
