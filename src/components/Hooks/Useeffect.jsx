import { useState, useEffect, useRef } from "react";

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
const idUrl = id =>
  `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;

const box = {
  display: "flex",
  flexDirection: "column",
  //border: "2px solid grey",
  padding: 10
};
export const Useeffect = () => {
  const [model, setModel] = useState({
    names: [],
    chosenId: "",
    currentId: "",
    hookCalls: 0,
    info: []
  });
  console.log("MODEL STATE: ", model);
  const addIfUnique = (_pool, _actor) => {
    const isHere = _pool.filter((e, i) => e.id === _actor.id /* ? _pool : i*/);
    return isHere.length === 0 ? [..._pool, { ..._actor }] : [..._pool];
  };
  const { names, chosenId } = model;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setModel({
          ...model,
          names: [...data]
          //hookCalls: (model.hookCalls += 1)
        });
      });
  }, []);
  const List = () => (
    <div>
      {names.map(e => (
        <div
          style={box}
          onClick={() => {
            setModel({ ...model, chosenId: e.id });
          }}
        >
          {e.name}
        </div>
      ))}
    </div>
  );
  const Details = ({ info }) => {
    const [detailsId, setDetailsId] = useState(info.id);
    useEffect(() => {
      if (model.info.filter(e => +e.id === detailsId).length === 0) {
        fetch(idUrl(detailsId))
          .then(res => res.json())
          .then(data => {
            setModel({
              ...model,
              hookCalls: (model.hookCalls += 1),
              info: [...model.info, { ...data }]
            });
          });
      }
    }, [detailsId]);
    return (
      <div style={{ ...box, padding: 0 }}>
        {/*<div>{JSON.stringify(info.name)}</div>*/}
        {info.name === undefined ? (
          "loading..."
        ) : (
          <div>
            <div style={box}>{info.name.name}</div>
            <div style={box}>City : {info.name.details.city}</div>
            <div style={box}>Company : {info.name.details.company}</div>
            <div style={box}>Position : {info.name.details.position}</div>
          </div>
        )}
      </div>
    );
  };
  return (
    <div style={{ ...box, flexDirection: "row", paddingTop:120 }}>
    {/*<div>hook calls: {model.hookCalls}</div>*/}
      <div style={{ ...box, width: "300px" }}>
        <List />
      </div>
      <div style={{ ...box, width: "300px" }}>
        {model.chosenId !== "" ? (
          <Details
            info={{
              id: chosenId,
              name: model.info.filter(e => e.id === chosenId)[0]
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
