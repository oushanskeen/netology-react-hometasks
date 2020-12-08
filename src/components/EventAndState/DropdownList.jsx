import { useState } from "react";
const sampleData = [
  { name: "point 1", isChosen: false },
  { name: "point 2", isChosen: false },
  { name: "point 3", isChosen: false },
  { name: "point 4", isChosen: false }
];
const chooser = (_object, _itemName) =>
  _object.map(e =>
    e.name === _itemName ? { ...e, isChosen: true } : { ...e, isChosen: false }
  );
const List = ({ sel, data, handle }) =>
  data.map(e => (
    <p style={{ background: e.isChosen ? "red" : "white" }} onClick={handle}>{e.name}</p>
  ));
export const DropdownList = (data = sampleData) => {
  const [listState,setListState] = useState(sampleData);
  const [dropState, setDropState] = useState(false);
  console.log("LIST STATE CHANGE", listState);
  const doSelect = (name) => setListState(chooser(listState,name));
  return (
    <>
      <button onClick={() => setDropState(!dropState)}>drop</button>
      <div>{!dropState ? "" : <List data={listState} handle={() => doSelect()} />}</div>
    </>
  );
};
