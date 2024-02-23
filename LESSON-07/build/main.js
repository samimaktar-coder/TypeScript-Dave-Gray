"use strict";
// Index Signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Count: 53,
};
// todaysTransactions.Pizza = 40;
// console.log(todaysTransactions.Pizza);
// console.log(todaysTransactions["Books"]);
// console.log(todaysTransactions["Samim"]);
const todayNet = (transactions) => {
    let total = 0;
    for (let key in transactions) {
        total += transactions[key];
    }
    return total;
};
const student = {
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
const logStudentKey = (student, key) => {
    console.log(`${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
