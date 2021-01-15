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
  //border: "2px solid grey",
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

  const useFetch = (url,opts) => {
    const [fetchState, setFetchState] = useState({
      data: [],
      isLoading: false,
      error: null
    });
    const { data, isLoading, error } = fetchState;
    const fetchUrl = async () => {
      setFetchState({ ...fetchState, isLoading: true });
      //const response = await fetch(url);
      let response, json;
      try {
        response = await fetch(url,{method:opts});
      } catch (error) {
        setFetchState({ ...fetchState, isLoading: false, error: error });
      }
      json = await response.json();
      console.log("IF ERROR AFTER JSON: ", json);
      json.status == "ok"
        ? setFetchState({ data: json,isLoading: false, error:null })
        : setFetchState({ data: [], isLoading: false, error: json });
    };

    useEffect(() => fetchUrl(), []);
    return [data, isLoading, error];
  };

  const SimpleFetch = ({url}) => {
    const [data, isLoading, error] = useFetch(`http://localhost:7070/${url}`);
    return (
      <div style={{...box, width:"700px"}}>
        <h3 style={{...box, width:"25%"}}>{url}</h3>
        <div style={{...box,width:"75%"}}>
          <div>data: {JSON.stringify(data)}</div>
          <div>loading: {JSON.stringify(isLoading)}</div>
          <div>error: {JSON.stringify(error)}</div>
        </div>
      </div>
    );
  };
  const Data = () => <SimpleFetch url={"data"}/>
  const Loading = () => <SimpleFetch url={"loading"}/>
  const Error = () => <SimpleFetch url={"error"}/>
  return (
    <div style={boxCol}>
      <Data />
      <Loading />
      <Error />
    </div>
  );
};
