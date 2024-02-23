// Generics

const strinEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;

//! ========================
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// console.log(isObj(true));
// console.log(isObj("John"));
// console.log(isObj([3, 5, 2]));
// console.log(isObj({ name: "Samim" }));
// console.log(isObj(null));

//! ========================
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue("Dave"));
// console.log(isTrue(""));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({})); // modified
// console.log(isTrue({ name: "Dave" }));
// console.log(isTrue([])); // modified
// console.log(isTrue([1, 2, 3]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

//! ========================

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//! =================
interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  return user;
};

// console.log(processUser({ id: 1, name: "Samim" }));
// console.log(processUser({ name: "Samim" }));

//! ======================

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state() {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John");
store.state = "Samim";
// console.log(store.state);

const count = new StateObject(23);
count.state = 88;
// console.log(count.state);

const myState = new StateObject<(string | number | boolean)[]>([123]);
// console.log(myState.state);
