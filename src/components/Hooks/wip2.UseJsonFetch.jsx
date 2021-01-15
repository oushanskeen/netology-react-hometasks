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
   // data: [],
    url: "",
    opts: ""
  });
  const {url,opts,error} = state;
  console.log("URL OUTSIDE USEFFECT == : ", `${url}${opts}`); 
  const useJsonFetch = (_url,_opts) => {
   // const [state,setState] = useState({
   //   data:"",
   //   loading: false
   // })
  useEffect(()=>{
    let out = {data:"",load:"", err:""};
    let {data,load,err} = out;
    console.log("NEW OPTS IS TRIGGERED");
    fetch(_url + _opts)
    //.then(() => setState({...state, loading:true}))
    .then(() => ({...out, load:true}))
    .then(res => !res
        ? setState({
            ...state,
            loading:false,
            error: res !== undefined ? res.statusText : "some error"
          })
        : res.json()
    )
    .then(data => setState({...state, data:data}))
  },[_url,_opts]);
    return Object.values(state);
  };
  const [data, loading] = useJsonFetch(url,opts)
  console.log("DATA OUTSIDE HOOK: ", data);
  console.log("LOADING OUTSIDE HOOK: ", loading);
/*
  const useJsonFetch = (_url, _opts) => {
    console.log("URL inse fetch hook == : ", `${_url}${_opts}`); 
    console.log("ME INSIDE UseJsonFetch");
    const [response, setResponse] = useState({
      loading:false,
      error:"",
      data:"",
      url:_url,
      opts:_opts
    });
    const {url,opts} = response;
    console.log("URL inside fetch hook after assign == : ", `${_url}${_opts}`); 
    console.log("CURRENT RESPONSE IN UseJsonFetch: ", response);
    useEffect(()=>{
      console.log("M E E E INSIDE USE EFFECT");
      console.log("URL IN USEEFFECT = :", _url);
      _url !== "" && console.log("URL !== 0") && opts !== "" && fetch(`${_url}${_opts}`)
      .then(() => console.log("ME AFTER FETCH"))
      .then(() => setResponse({...response, loading:true}))
      //.then(() => console.log("ME AFTER FETCH AGAIN: ", response))
      /*
      .then(res =>!res.ok
          ? setResponse({
              ...response,
              loading:false, 
               error: res !== undefined ? res.statusText : "something wrong" 
            })
          : res.json()
      )
      */
      /*
      .then(res => {
          console.log("RESPONSE FROM SERVER", res);
          console.log("RESPONSE IN STORE: ", response);
          return res.json()
      })
      .then(data => setResponse({...response, data: data, loading:false}))
      */
      //.catch(err => setResponse({...response, loading: false, error: err.message}))
  //
  ///*
  //  },[]);
 //   return Object.values(response);
 // };
 // const [loading, error, data] = useJsonFetch(url, opts);
 // console.log("LOADING IS: ", loading);
  const Data = () => {
    return (
      <div style={box}>
        <button
          style={button}
          onClick={() => setState({ ...state, url:inputUrl, opts: "data" })}
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
          onClick={() => setState({ ...state, url:inputUrl, opts: "loading" })}
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
          onClick={() => setState({ ...state, url:inputUrl, opts: "error" })}
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
