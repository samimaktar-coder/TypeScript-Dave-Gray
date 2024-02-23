type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // Less specific
let c = a as Three; // more specific

let d = <One>"samim";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(42, 8, "concat") as string;
console.log(myVal);

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(40, 10, "concat") as number;
console.log(nextVal);

// The DOM

const img = document.querySelector("#myImg") as HTMLImageElement;
const myImg = document.getElementById("myId") as HTMLImageElement;
