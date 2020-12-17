import React, { useState } from "react";
import "./popularnew.css";

const New = ({ child }) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {child}
    </div>
  );
};

const Popular = ({ child }) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {child}
    </div>
  );
};

const Article = props => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  );
};
const marker = (comp, views) => {
  return views > 1000 ? (
    <Popular child={comp} />
  ) : views < 100 ? (
    <New chil={comp} />
  ) : (
    comp
  );
};
const Video = props => {
  return (
    <div className="item item-video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
};

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case "video":
        return marker(<Video {...item} />, item.views);
      case "article":
        return marker(<Article {...item} />, item.views);
      default:
        return;
    }
  });
}
const box = {
  display:"flex",
  flexDirection:"column",
  margin:0,
  paddingTop:120
};
const Wrapper = ({child}) => (
  <div style={box}>
    {child}
  </div>
);
export function Popularnew() {
  const [list, setList] = useState([
    {
      type: "video",
      url:
        "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      views: 50
    },
    {
      type: "video",
      url:
        "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      views: 12
    },
    {
      type: "article",
      title: "Невероятные события в неизвестном поселке...",
      views: 175
    },
    {
      type: "article",
      title: "Секретные данные были раскрыты!",
      views: 1532
    },
    {
      type: "video",
      url:
        "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      views: 4253
    },
    {
      type: "article",
      title: "Кот Бегемот обладает невероятной...",
      views: 12
    }
  ]);

  return <Wrapper child={<List list={list} />}/>;
}
