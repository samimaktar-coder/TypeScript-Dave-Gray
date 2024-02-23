class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I am ${this.age}`;
  }
}

const user = new Coder("Samim", "Super", 21);
// console.log(user.getAge());
// console.log(user.name);
// console.log(user.age);
// console.log(user.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    readonly name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
// console.log(Sara.getLang());
// console.log(Sara.lang);

//! ==========================

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

// const David = new Guitarist("David", "Guitar");
// console.log(David.play("shape of you"));

//! ====================
class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Emma = new Peeps("Emma");

console.log(Emma);
console.log(John);
console.log(Steve);
// console.log(Peeps.getCount());

//! ========================
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(arr: string[]) {
    this.dataState = arr;
  }
}

const myBands = new Bands();
myBands.data = ["Ed Sheeran", "Shakira", "Atif Aslam"];
// console.log(myBands.data);
myBands.data = ["samim"];
// console.log(myBands.data);
