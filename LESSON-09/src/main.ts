// Utility Types

//! Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
  // verified: true,
};

// console.log(updateAssignment(assign1, { grade: 85 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//!================ Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Assignment = {
  ...assignGraded,
  verified: false,
};

//* NOTE: assignVerified won't work with recordAssignment!
//* Why? Try it and see what TS tells you :)

//. The reason it wasn't working before lies in how TypeScript infers types and performs type checking. TypeScript's type inference can sometimes struggle with complex type relationships, especially when using object spread syntax (...) to create new objects.
//. TypeScript wasn't able to conclusively determine that assignVerified includes all required properties of the Assignment interface. Although assignGraded contained all required properties, TypeScript's inference didn't guarantee that the spread operation would retain the required property checks.

const verifiedAssignment = assignVerified as Required<Assignment>;

// console.log(recordAssignment(verifiedAssignment));
// console.log(recordAssignment({ ...assignGraded, verified: true }));

//! =============== RECORD

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};


type students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "E" | "U";

const finalGrades: Record<students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<students, Grades> = {
  Sara: { assign1: 85, assign2: 95 },
  Kelly: { assign1: 76, assign2: 44 },
};
//! ============ Pick and Omit

type AssignedResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignedResult = {
  studentId: "k123",
  grade: 78,
};

type AssignedPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignedPreview = {
  studentId: "k234",
  title: "Final Project",
};

//!============== Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U" | "D" | "C">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//! ========== Nonnullable
type AllPossibleGrades = string | number | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//!============== ReturnType
// type NewAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number, score: number) => {
  return { title, points, score };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Samim Akta", 100, 342);
// console.log(tsAssign);

//!========== Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Superman", 32, 532];
const taAssign2: NewAssign = createNewAssign(...assignArgs);
// console.log(taAssign2);

//!=========== Awaited - helps us with the ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
