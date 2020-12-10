import { useState } from "react";
const isHex = num => Boolean(num.match(/^#[0-9a-fA-F]+$/i));
function hexToRGB(h) {
  const r = "0x" + h[1] + h[2];
  const g = "0x" + h[3] + h[4];
  const b = "0x" + h[5] + h[6];
  let out = `rgb(${+r}, ${+g}, ${+b})`;
  console.log("IS HEX OUT: ", isHex(h));
  return h.length < 7 ? "..." : isHex(h) ? out : "ОШИБКА!";
}

const ColorProcesser = ({ data, handle }) => (
  <div
    style={{
      background: data[1] === "ОШИБКА!" ? "red" : data[0],
      margin: 0,
      paddingTop: 120,
      height: "100vh"
    }}
  >
    <div style={{ padding: 50 }}>
      {console.log("DATA: ", data[1])}
      <input onChange={handle} style={{ padding: 5 }} />
      <div style={{ paddingLeft: 5, margin: 5 }}>{data[1]}</div>
    </div>
  </div>
);
export const Converter = input => {
  const [x, setX] = useState("");
  const updateModel = state => [state, hexToRGB(state)];
  const handleMe = ev =>
    ev.target.value.length >= 7 ? setX(updateModel(ev.target.value)) : setX("");
  return <ColorProcesser data={x} handle={e => handleMe(e)} />;
};
