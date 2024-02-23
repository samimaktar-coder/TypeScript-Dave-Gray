"use strict";
let stringArr = ["one", "hey", "samim"];
let guitars = ["start", "les Paul", 5140];
let mixData = ["seven", 23, true];
mixData.push(32);
let test = [];
// Tuple
let myTuple = ["Nothing", 32, true, false];
let mixed = ["john", 1, false];
mixed = myTuple;
// Objects
let myObj;
myObj = [];
myObj = mixData;
myObj = {};
const exampleObj = {
    key1: "Samim",
    key2: true,
};
exampleObj.key2 = false;
let evh = {
    name: "Samim",
    active: false,
    albums: [1994, 5510, "OUT3F"],
};
let jp = {
    // name: "Jimmy",
    active: true,
    albums: [1, "II", 3],
};
const greetGuitarist = (guitarist) => {
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
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
