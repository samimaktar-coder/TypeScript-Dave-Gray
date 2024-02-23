"use strict";
// Generics
const strinEcho = (arg) => arg;
const echo = (arg) => arg;
//! ========================
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([3, 5, 2]));
// console.log(isObj({ name: "Samim" }));
// console.log(isObj(null));
//! ========================
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
// console.log(processUser({ id: 1, name: "Samim" }));
// console.log(processUser({ name: "Samim" }));
//! ======================
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const usersArray = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
];
// console.log(getUsersProperty(usersArray, "email"));
// console.log(getUsersProperty(usersArray, "username"));
//!====================
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
store.state = "Samim";
// console.log(store.state);
const count = new StateObject(23);
count.state = 88;
// console.log(count.state);
const myState = new StateObject([123]);
// console.log(myState.state);
