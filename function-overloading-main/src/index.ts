type Values = string | number | boolean;
function welcome(name: string): void;
function welcome(age: number): void;
function welcome(isTeacher: boolean): void;
function welcome(value: Values) {
  if (typeof value === "string") {
    console.log(`Hello, ${value}!`);
  } else if (typeof value === "number") {
    console.log(`You are ${value} years old..`);
  } else if (typeof value === "boolean" && value) {
    console.log(`Are you a teacher? Yes.`);
  } else if (typeof value === "boolean") {
    console.log(`Are you a teacher? No.`);
  }
}

export default welcome;
