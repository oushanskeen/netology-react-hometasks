import { useState, useEffect } from "react";

const box = {
  display: "flex",
  border: "2px solid lightGrey",
  padding:10
};

const timeExtract = _timeString => _timeString.toString().split(" ")[4];
const timeShifter = (_shift = 0) => {
  const time = new Date();
  const timeHead = time
    .toString()
    .split(" ")
    .slice(0, 5)
    .join(" ");
  const currShift = +time
    .toString()
    .split(" ")
    .slice(-4, -3)[0]
    .split("+")[1]
    .slice(0, 2);
  const timeTail = `GMT+${currShift + _shift}00`;
  const out = timeExtract(new Date(`${timeHead} ${timeTail}`));
  return out;
};
export const Worldtime = () => {
  const [formInput, setFormInput] = useState({});
  const [model, setModel] = useState([]);
  const dispatch = (_message, _payload) => {
    switch (_message) {
      case "INPUT_CITY":
        setFormInput({ ...formInput, city: _payload });
        break;
      case "INPUT_TIMEZONE":
        setFormInput({ ...formInput, timezone: `${_payload}` });
        break;
      case "ADD_RECORD":
        setModel([...model, {...formInput,time:timeShifter(formInput.timezone)}]);
        setFormInput(["",""]);
        break;
      case "DELETE_RECORD":
        setModel(model.filter(e => e.city !== _payload));
        break;
      default:
        setFormInput(formInput);
    }
  };

  const ShowCityTime = ({ city, shift }) => {
    const [time, setTime] = useState("");
    useEffect(() => {
      setTimeout(() => setTime(timeShifter(shift)), 1000);
    }, [time]);
    return (
      <div style={box}>
        {city} {time}
      </div>
    );
  };

  return (
    <div style={{ ...box, paddingTop: 200 }}>
      <div style={{...box, flexDirection:"column"}}>
        {console.log("MODEL: ", model)}
        <div style={box}>
          <div style={ box }>
            <label style={box}> Name </label>
            <input
              name="city"
              onChange={e => dispatch("INPUT_CITY", e.target.value)}
              style={box}
            />
          </div>
          <div style={box}>
            <label style={box}> Time zone </label>
            <input
              name="timezone"
              onChange={e => dispatch("INPUT_TIMEZONE", e.target.value)}
              style={box}
            />
          </div>
          <button onClick={() => dispatch("ADD_RECORD")} style={box}> add </button>
        </div>
        {model.map(e => (
          <div style={box}>
            <ShowCityTime city={e.city} shift={e.timezone} />
            <span onClick={() => dispatch("DELETE_RECORD", e.city)} style={box}> x </span>
          </div>
        ))}
      </div>
    </div>
  );
};
