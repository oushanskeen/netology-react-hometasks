const pool = [{ "id": "1" }, { "id": "2" }, { "id": "3" }];
console.log("POOL IS :", pool);
const AddIfUnique = (_pool, _actor) => {
  console.log("INPUT: ", _pool, _actor);
  const isHere = _pool.filter(e => +e.id === _actor).length !== 0;
  console.log("ISHERE IS: ", isHere);
  return isHere.length === 0
    ? [..._pool, { ..._actor }]
    : [..._pool];
};
console.log("OUT 1: ", AddIfUnique(pool,4));
console.log("OUT 2: ", AddIfUnique(pool,2));
//console.log("PUT 3: ", AddIfUnique(pool,{"id":"4"}));
