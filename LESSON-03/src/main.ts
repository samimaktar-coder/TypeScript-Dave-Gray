let stringArr: string[] = ["one", "hey", "samim"];

let guitars = ["start", "les Paul", 5140];

type mixType = string | boolean | number;
let mixData: mixType[] = ["seven", 23, true];
mixData.push(32);

let test = [];

// Tuple
let myTuple: [string, number, boolean, boolean] = ["Nothing", 32, true, false];

let mixed = ["john", 1, false];

mixed = myTuple;

// Objects
let myObj: object;
myObj = [];
myObj = mixData;
myObj = {};

const exampleObj = {
  key1: "Samim",
  key2: true,
};

exampleObj.key2 = false;

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Samim",
  active: false,
  albums: [1994, 5510, "OUT3F"],
};

let jp: Guitarist = {
  // name: "Jimmy",
  active: true,
  albums: [1, "II", 3],
};

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `HELLO ${guitarist.name.toUpperCase()}`;
  }
  return "HELLO!";
};

let result1 = greetGuitarist(jp);
let result2 = greetGuitarist(evh);
// console.log(result1);
// console.log(result2);

// Enums
// "Unlike most TypeScript features, Enums are not a type-level additon to JavaScript but something added to the language and runtime."

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.A);
