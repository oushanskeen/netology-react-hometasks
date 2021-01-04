import { useState, useEffect } from "react";

const isNotJson = _x => {
  try {
    return JSON.parse(_x);
  } catch (e) {
    return;
  }
};

const box = {
  display: "flex",
  flexDirection: "row",
  width: "500px",
  justifyContent: "space-between",
  //flexDirection:"column",
  padding: 5,
  border: "2px solid grey",
  margin: 0
};
const boxCol = {
  ...box,
  flexDirection: "column",
  paddingTop: 120
};
const button = {
  width: "300px"
};

export const UseJsonFetch = () => {
  const inputUrl = "http://localhost:7070/";
  const [state, setState] = useState({
    loading: false,
    responseStatus:"",
    error: "",
    data: [],
    url: inputUrl,
    opts: ""
  });

  const {loading, data, error, responseStatus,url,opts} = state;
 
  const Data = () => {
    return (
      <div style={box}>
        <button
          style={button}
          onClick={() => setState({ ...state, responseStatus: "data" })}
        >
          make successful request
        </button>
        data : {JSON.stringify(data)}
      </div>
    );
  };
  const Loading = () => {
    return (
      <div style={box}>
        <button
          style={button}
          onClick={() => setState({ ...state, responseStatus: "loading" })}
        >
          make loading request
        </button>
        loading : {JSON.stringify(loading)}
      </div>
    );
  };
  const Error = () => {
    return (
      <div style={box}>
        <button
          style={button}
          onClick={() => setState({ ...state, responseStatus: "error" })}
        >
          make error request
        </button>
        {JSON.stringify(error)}
      </div>
    );
  };

  return (
    <div style={boxCol}>
      <div>{JSON.stringify(state)}</div>
      <div>
        <Data />
        <Loading />
      </div>
      <Error />
    </div>
  );
};
