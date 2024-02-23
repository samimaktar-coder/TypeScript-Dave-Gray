// Index Signature

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

// interface TransactionObj {
//   readonly [key: string]: number;
// }

interface TransactionObj {
  readonly [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Count: 53,
};

// todaysTransactions.Pizza = 40;

// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Books"]);
// console.log(todaysTransactions["Samim"]);

const todayNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (let key in transactions) {
    total += transactions[key];
  }
  return total;
};

// console.log(todayNet(todaysTransactions));

//!========================
interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Samim",
  GPA: 3.5,
  classes: [115, 245],
};

// console.log(student.GPA);
// console.log(student.classes);

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

// Object.keys(student).map((key) => {
//   console.log(`${key}: ${student[key as keyof typeof student]}`); // if we don't know the interface
// });

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`${key}: ${student[key]}`);
};

// logStudentKey(student, "GPA");

//! ===============================
// interface Incomes {
//   [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
