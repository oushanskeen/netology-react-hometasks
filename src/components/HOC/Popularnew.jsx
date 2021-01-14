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

const Article = ({title,views}) => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};
const Video = ({url,views}) => {
  return (
    <div className="item item-video">
      <iframe
        src={url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title=""
      ></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};
const withPopular = Component => ({views}) => { 
  console.log("Hello me inside wrapper hoc");
  return (views > 1000
  ? <New child={Component} />  
    : views < 100
      ? <Popular child={Component} />
      : Component
  );
};
const List = ({list}) => {
    return list.map(item => {
        switch (item.type) {
            case 'video':
                console.log("Hello me inside list switcher");
                return (
                    withPopular(<Video {...item} />)({...item})
                );
            case 'article':
                return (
                    withPopular(<Article {...item} />)({...item})
                );
          default: return;
        }
    });
};

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

  return <List list={list}/>;
}
