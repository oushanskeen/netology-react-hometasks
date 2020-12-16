import { useState, useEffect } from "react";

const sampleModel = [
  { id: 0, content: "stub task one" },
  { id: 1, content: "stub task two" },
  { id: 2, content: "stub task three" },
  { id: 3, content: "stub task four" }
];

export const Crud = ({ modelIn = sampleModel }) => {
  const [loadError, setloadError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [model, setModel] = useState([]);
  const [action, setAction] = useState([]);
  const [newTask, setNewTask] = useState("");

  //console.log("NEW TASK INPUT FILED VALUE:", newTask);
  const dispatch = (message, payload) => {
    console.log("DIPSPATCHER RECEIVES: ", message, payload);
    console.log("MODELLLLL:", model);
    switch (message) {
      case "GET":
        fetch("http://127.0.0.1:7777/notes", { method: "GET" })
          .then(res => res.json())
          .then(data => {
            setIsLoaded(true);
            console.log("DATA AFTER LOAD: ", data);
            setModel(data);
          });
        return;
      case "DELETE":
        fetch(`http://127.0.0.1:7777/notes?id=${payload}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            setIsLoaded(true);
            console.log("DATA ON DELETE: ", data);
            setModel(data);
          });
        return;
      case "POST":
        fetch(
          `http://127.0.0.1:7777/notes?task=${JSON.stringify({
            id: Date.now(),
            content: payload
          })}`,
          { method: "POST" }
        )
          .then(res => res.json())
          .then(data => {
            setIsLoaded(true);
            setModel(JSON.parse(data));
          });
        return;
      default:
        return;
    }
  };

  const box = {
    display: "flex",
    //border: "2px solid grey"
  };
  const cardStyle = {
    width: 250,
    height: 150,
    padding: 0
  };
  const Card = ({ data }) => (
    <div
      style={{
        ...box,
        flexDirection: "column",
        width: "100%",
        height: "100%",
        margin: 10
      }}
    >
      <div>
        <div
          style={{
            ...box,
            justifyContent: "end",
            paddingRight: 10,
            borderColor: "lightGrey"
          }}
          onClick={() => setAction(["DELETE", data.id])}
        >
          <b>x</b>
        </div>
        <div style={{ ...box, width: "100%", height: "100%", padding: 10 }}>
          {data.content}
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    if (model.length === 0) {
      dispatch("GET");
    }
    switch (action[0]) {
      case "GET":
        dispatch("GET");
        setAction([]);
        return;
      case "POST":
        console.log("ON POST action: ", action);
        dispatch("POST", action[1]);
        setNewTask([]);
        setAction([]);
        return;
      case "DELETE":
        dispatch("DELETE", action[1]);
        setAction([]);
        return;
      default:
        return;
    }
  }, [model, action]);
  return (
    <div
      style={{ ...box, flexDirection: "column", margin: 0, paddingTop: 200 }}
    >
      <button onClick={() => setAction(["GET"])}>RELOAD</button>
      <div style={{ ...box, padding: 10 }}>
        <label>
          add task
          <input
            name="newTask"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button onClick={() => setAction(["POST", newTask])}>add</button>
        </label>
      </div>
      {model.map(e => (
        <Card data={e} />
      ))}
    </div>
  );
};
