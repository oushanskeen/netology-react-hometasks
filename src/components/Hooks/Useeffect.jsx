import { useState, useEffect, useRef } from "react";

const sampleNames = [
  { name: "name one", isSelected: true },
  { name: "name two", isSelected: false },
  { name: "name three", isSelected: false }
];
const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";
const idUrl = (id) => `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;


export const Useeffect = () => {
  const [model, setModel] = useState({
    names: [...sampleNames],
    namesp: [],
    chosenId:"",
    currentId:"",
    hookCalls:0,
    info:[]
  });
  const { names, currentId, chosenId } = model;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("ON DATA FETCH: ", data);
        setModel({ ...model, names: [...data],hookCalls: model.hookCalls += 1 });
        console.log("MODEL: ", model);
    });
    /*
     *savefetched data in array and then fetch only new
     * */
    fetch(idUrl(chosenId))
    .then(res => res.json())
    .then(data => {
     console.log("DATA FETCH ON DETAILS: ", data)
      setModel(
        {...model,currentId:data, hookCalls: model.hookCalls += 1}
      )
    });
  }

    , []);
  const List = () => (
    <div>
      {names.map(e => (
        <div 
          onClick={
            ()=> {
            console.log("CLICKED NAME: ", e);
            setModel({...model, chosenId:e.id})
            console.log("MODEL AFTER CHOOSE: ", model)
          }
            
          }
        >
          {e.name}
        </div>
      ))}
    </div>
  );
  const Details = ({ info }) => (
    <div>
      <div>{info.id}</div>
      <div>{JSON.stringify(info.name)}</div>
    </div>
  );
  return (
    <div>
      use your effect
      <div>
        <List />
      </div>
      <div>
        <Details info={{id:chosenId, name:currentId}} />
      </div>
    </div>
  );
};
