import { useState, useEffect } from "react";

const sampleModel = [
  { id: 0, content: "stub task one" },
  { id: 1, content: "stub task two" },
  { id: 2, content: "stub task three" },
  { id: 3, content: "stub task four" }
];

const box = {
  display: "flex",
  width: "300px",
  justifyContent: "space-between"
};
export const Crud = ({ modelIn = sampleModel }) => {
  /*
  const [loadError, setloadError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [model, setModel] = useState([]);
  const [action, setAction] = useState([]);
  const [newTask, setNewTask] = useState("");
  */
  const [state, setState] = useState({
    model: [],
    inputState: "",
    newTask: "",
    isOnDelete: 0,
    isReset: false
  });
  const {
    model,
    inputState,
    newTask,
    isTaskAdded,
    isOnDelete,
    isReset
  } = state;

  useEffect(() => {
    if (isReset === true || model.length < 1) {
      fetch("http://localhost:7777/notes")
        .then(res => res.json())
        .then(data =>
          setState({ ...state, model: [...data], isReset: !isReset })
        );
    }
  }, [/*isReset]*/]);
  useEffect(() => {
    if (newTask !== "") {
      fetch("http://localhost:7777/notes", { method: "POST", body: newTask })
        .then(data => fetch("http://localhost:7777/notes"))
        .then(res => res.json())
        .then(data => setState({ ...state, model: [...data] }));
    }
  }, [newTask]);
  useEffect(() => {
    if (isOnDelete !== 0) {
      fetch(`http://localhost:7777/notes/${isOnDelete}`, { method: "DELETE" })
        .then(data => fetch("http://localhost:7777/notes"))
        .then(res => res.json())
        .then(data => setState({ ...state, model: [...data] }));
    }
  }, [isOnDelete]);
  const Task = ({ task }) => (
    <div style={box}>
      <div> {JSON.stringify(task)} </div>
      <button onClick={() => setState({ ...state, isOnDelete: task.id })}>
        {" "}
        x{" "}
      </button>
    </div>
  );
  const TasksList = () =>
    model === undefined ? (
      <div>pardon, no tasks</div>
    ) : (
      model.map(e => <Task task={e} />)
    );
  return (
    <div style={{paddingTop:120}}>
    {/*<div>{JSON.stringify(state)}</div>*/}
      <button onClick={() => setState({ ...state, isReset: !isReset })}>
        reset
      </button>
      <div>
        <input
          value={inputState}
          onChange={e => setState({ ...state, inputState: e.target.value })}
        />
       {/*<div>input state: {inputState}</div>*/}
        <button
          onClick={() =>
            setState({ ...state, newTask: inputState, inputState: "" })
          }
        >
          add task
        </button>
      </div>
      <TasksList />
    </div>
  );
};
