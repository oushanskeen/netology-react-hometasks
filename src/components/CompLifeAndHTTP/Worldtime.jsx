import {useState} from "react";

const sampleModel = [
  {city:"Moscow", shift:"+3",time:""},
  {city:"London", shift:"+2",time:""},
  {city:"Tokyo", shift:"-1",time:""},
  {city:"Paris", shift:"+8",time:""},
];
export const Worldtime = () => {
  const [model,setModel] = useState(sampleModel);
  const timUpd = () => {
    const d = new Date();
    const hh = d.getHours();
    const mm = d.getMinutes();
    const ss = d.getSeconds();
    const newModel = model.map(e => 
      ({
        ...e,
        time:`${hh + +e.shift}:${mm}:${ss}`
      }));
    setModel(newModel);
    return;
  }
  setTimeout(timUpd,1000);
  return (
    <div>
     {model.map(e => <div>{e.city} {e.time}</div>)}
    </div>
  );
}
