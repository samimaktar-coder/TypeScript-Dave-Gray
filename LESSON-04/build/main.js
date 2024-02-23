"use strict";
// Type Aliases
// Literal Types
let myName;
let username;
username = "Arif";
// console.log(username);
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// logMsg("Hello!");
// logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
//}
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(3, 5));
//Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// logMsg(addAll(3, 5));
// logMsg(sumAll(3, 5));
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((a, b) => a + b, 0);
};
logMsg(total(3, 5, 2));
// Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiteLoop = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
