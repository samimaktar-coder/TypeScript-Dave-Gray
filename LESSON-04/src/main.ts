// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type UserId = stringOrNumber;

// Literal Types
let myName: "Samim";
let username: "Samim" | "Arif" | "John" | "Tony";

username = "Arif";
// console.log(username);

const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

// logMsg("Hello!");
// logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
//}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// logMsg(multiply(3, 5));

//Optional Parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

// logMsg(addAll(3, 5));
// logMsg(sumAll(3, 5));

// Rest Parameters

const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b, 0);
};

logMsg(total(3, 5, 2));

// Never Type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

//! The difference between 'void' and 'never' is that we use void when we can return any value but we don't want to and we use 'never' when the function will never return anything.

const infiteLoop = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};
