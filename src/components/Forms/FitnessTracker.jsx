import { useState } from "react";
const delObj = require("./FitHelperFuncs.js").delObj;
const updObj = require("./FitHelperFuncs.js").updObj;
const exchangeObj = require("./FitHelperFuncs.js").exchangeObj;

const isHere = (_arr, _value) => Object.keys(_arr).includes(_value);
const sampleData = {
  formData: ["", ""],
  logData: [
    { date: "27.07.2019", steps: 5.7 },
    { date: "19.07.2019", steps: 14.2 },
    { date: "18.07.2019", steps: 3.4 }
  ],
  stateOnAdd: true // if false, state ON EDIT
};
const wrapper = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "10px",
  gridAutoRows: "minmax(100px, auto)",
  width: "500px",
  paddingTop: 130,
  paddingLeft: 10
};
const box = {
  border: "2px solid black",
  padding: 10
};
const button = {
  marginTop: 5
};
export const FitnessTracker = () => {
  const [model, setModel] = useState({ ...sampleData });
  const updateModel = (msg, payload) => {
    switch (msg) {
      case "DATE_INPUT":
        setModel({ ...model, formData: [payload, model.formData[1]] });
        break;
      case "STEPS_INPUT":
        setModel({ ...model, formData: [model.formData[0], payload] });
        break;
      case "ON_ADD_RECORD":
        setModel({
          ...model,
          formData: ["", ""],
          logData: exchangeObj(model.logData, {
            date: payload[0],
            steps: payload[1]
          })
        });
        break;
      case "ON_EDIT":
        setModel({
          ...model,
          stateOnAdd: false,
          formData: [payload.date, payload.steps]
        });
        break;
      case "ON_SAVE_EDIT":
        setModel({
          ...model,
          formData: ["", ""],
          stateOnAdd: true,
          logData: updObj(model.logData, {
            date: model.formData[0],
            steps: model.formData[1]
          })
        });
        break;
      case "ON_DELETE":
        setModel({
          ...model,
          logData: delObj(model.logData, {
            date: payload.date,
            steps: payload.steps
          })
        });
        break;
      default:
        setModel(model);
    }
  };
  return (
    <div style={wrapper}>
      <div>
        <div style={{ ...box, padding: 10 }}>
          <div>
            <label>дата</label>
          </div>
          <div>
            <input
              name="date"
              value={model.formData[0]}
              onChange={e => updateModel("DATE_INPUT", e.target.value)}
            />
          </div>
          <div>
            <label>шаги</label>
          </div>
          <div>
            <input
              name="steps"
              value={model.formData[1]}
              onChange={e => updateModel("STEPS_INPUT", e.target.value)}
            />
          </div>
          <div>
            {!model.stateOnAdd ? (
              <button
                onClick={() => updateModel("ON_SAVE_EDIT")}
                style={button}
              >
                ok
              </button>
            ) : (
              <button
                disabled={!model.stateOnAdd}
                onClick={() => updateModel("ON_ADD_RECORD", model.formData)}
                style={button}
              >
                ok
              </button>
            )}
          </div>
        </div>
      </div>
      <div style={box}>
        {model.logData.map((e, i) => (
          <div>
            <span> {e.date} </span>
            <span> {e.steps} </span>
            <span onClick={() => updateModel("ON_EDIT", e)}> ✎ </span>
            <span onClick={() => updateModel("ON_DELETE", e)}> ✘ </span>
          </div>
        ))}
      </div>
    </div>
  );
};
