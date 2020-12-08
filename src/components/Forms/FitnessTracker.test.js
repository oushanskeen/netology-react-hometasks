
const sampleDataOne = "29.07.2019";
const sampleArray = {
  "29.07.2019":100,
  "29.08.2019":100,
  "29.09.2019":100,
  "29.07.2019":100
};
const isHere  = (_arr,_value) => Object.keys(_arr).includes(_value);
const addTran = (_pool,_date,_steps) => {
  return {..._pool,[_date]:
    ( !isHere(_pool,_date) ? _steps : _pool[_date] + _steps)
  };
};
describe("check if data exists", () => {
  it("true if true, false if false", () => {
    expect(isHere(sampleArray, sampleDataOne)).toEqual(true)
  })
  it("true if true, false if false 2", () => {
    expect(isHere(sampleArray, "30.12.2014")).toEqual(false)
  })

  it("adds to existing date", () => {
    expect(addTran({"20.20.2020":100},"20.20.2020",50)).toEqual({"20.20.2020":150});
  });
  it("adds to existing date 2", () => {
    expect(addTran({"20.20.2020":100},"21.20.2020",50)).toEqual({"20.20.2020":100,"21.20.2020":50});
  });
})

