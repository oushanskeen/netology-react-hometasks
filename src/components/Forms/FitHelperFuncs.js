const sampleUnsortedArray = [
  { "21": 3, "22": 6 },
  { "11": 2, "12": 5 },
  { "01": 1, "02": 4 }
];

const isObjByKeyHere = (_pool, _obj) => {
  const poolHeadKeys = _pool.map(e => Object.values(e)[0]);
  const objHeadKeys = Object.values(_obj)[0];
  return poolHeadKeys.includes(objHeadKeys);
};
const headKey = _obj => Object.values(_obj)[0];
const sortByHeadKey = (_obj) => _obj.sort((a,b) => headKey(a) < headKey(b) ? 1 : -1 );
const tail = _obj => Object.entries(_obj)[1];
const addObj = (_pool, _inObj) => {
  return sortByHeadKey([..._pool, _inObj]);
};
const delObj = (_pool, _inObj) => _pool.filter(e => headKey(e) !== headKey(_inObj));
const updObj = (_pool, _inObj) => addObj(delObj(_pool, _inObj), _inObj);
const mergeObj = (_pool, _inObj) => {
  const getClientFromPool = _pool.filter(
    e => headKey(e) === headKey(_inObj)
  )[0];
  const clientKeys = Object.keys(getClientFromPool);
  const clientValues = Object.values(getClientFromPool);
  const actorTail = tail(_inObj)[1];
  const newTail = +clientValues[1] + +actorTail;
  const outObj = { [clientKeys[0]]: clientValues[0], [clientKeys[1]]: newTail };
  const outModel = updObj(_pool, outObj);
  return sortByHeadKey(outModel);
};
const exchangeObj = (_pool, _inObj) => {
  const isObjHere = isObjByKeyHere(_pool,_inObj);
  const out = isObjHere ? mergeObj(_pool, _inObj) : addObj(_pool,_inObj);
  return sortByHeadKey(out);

}
module.exports = {
  addObj: addObj,
  delObj: delObj,
  updObj: updObj, 
  mergeObj : mergeObj,
  exchangeObj: exchangeObj
};
