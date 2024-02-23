let myName: string;
let age: number;
let isAlive: boolean;
let album: string | number;

myName = "Tony";
age = 45;
isAlive = false;
album = 343;

const sum = (a: number, b: string) => {
  return a + b;
};

let ans = sum(10, "4");
console.log(ans);

let postId: string | number;
let isActive: number | boolean | boolean;

let regEx: RegExp = /\w+/g;
