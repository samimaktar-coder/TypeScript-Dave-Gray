"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
    // verified: true,
};
// console.log(updateAssignment(assign1, { grade: 85 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//!================ Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: false });
//* NOTE: assignVerified won't work with recordAssignment!
//* Why? Try it and see what TS tells you :)
//. The reason it wasn't working before lies in how TypeScript infers types and performs type checking. TypeScript's type inference can sometimes struggle with complex type relationships, especially when using object spread syntax (...) to create new objects.
//. TypeScript wasn't able to conclusively determine that assignVerified includes all required properties of the Assignment interface. Although assignGraded contained all required properties, TypeScript's inference didn't guarantee that the spread operation would retain the required property checks.
const verifiedAssignment = assignVerified;
// console.log(recordAssignment(verifiedAssignment));
// console.log(recordAssignment({ ...assignGraded, verified: true }));
//! =============== RECORD
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 95 },
    Kelly: { assign1: 76, assign2: 44 },
};
const score = {
    studentId: "k123",
    grade: 78,
};
const preview = {
    studentId: "k234",
    title: "Final Project",
};
//!============== ReturnType
// type NewAssign = { title: string; points: number };
const createNewAssign = (title, points, score) => {
    return { title, points, score };
};
const tsAssign = createNewAssign("Samim Akta", 100, 342);
const assignArgs = ["Superman", 32, 532];
const taAssign2 = createNewAssign(...assignArgs);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users/2")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
