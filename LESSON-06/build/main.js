"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}`;
    }
}
const user = new Coder("Samim", "Super", 21);
// console.log(user.getAge());
// console.log(user.name);
// console.log(user.age);
// console.log(user.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.name = name;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
// const David = new Guitarist("David", "Guitar");
// console.log(David.play("shape of you"));
//! ====================
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Emma = new Peeps("Emma");
console.log(Emma);
console.log(John);
console.log(Steve);
// console.log(Peeps.getCount());
//! ========================
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(arr) {
        this.dataState = arr;
    }
}
const myBands = new Bands();
myBands.data = ["Ed Sheeran", "Shakira", "Atif Aslam"];
// console.log(myBands.data);
myBands.data = ["samim"];
// console.log(myBands.data);
