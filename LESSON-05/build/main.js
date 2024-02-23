"use strict";
// convert to more or less specific
let a = "hello";
let b = a; // Less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(42, 8, "concat");
console.log(myVal);
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(40, 10, "concat");
console.log(nextVal);
// The DOM
const img = document.querySelector("#myImg");
const myImg = document.getElementById("myId");
