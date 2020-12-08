function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}

console.log("OUT: ", hexToRGB("#00EEFF"));//=> rgb(0,238,255)
console.log("OUT: ", hexToRGB("#0000FF"));//=> rgb(0,0,255)
console.log("OUT: ", hexToRGB("#00EEEE"));//=> rgb(0,238,238)
describe("to sum",()=>{
  it("sums",()=>{
    expect(2+2).toEqual(4);
  })
})
const isHex = (num) => Boolean(num.match(/^0x[0-9a-f]+$/i)) ? "Ok!" : "Error!";
describe("ex error", () => {
  it("it sees", () => {
    expect(isHex("00EEFF")).toEqual("Error!")    
  })
  it("it sees 2", () => {
    expect(isHex("#00EEF")).toEqual("Error!")    
  })
  it("it sees 3", () => {
    expect(isHex("#00EEF")).toEqual("Error!")    
  })
});
