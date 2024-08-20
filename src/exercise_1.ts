let age: number = 21;
let myName: string = "Anna";
let isStudent: boolean = true;

function sayHi(personName: string): string {
    return `Hello, ${personName}!`;
}

function add(a: number, b: number): number {
    return a + b;
}

function ifStudent(studentStatus: boolean): string {
    return studentStatus ? "I'm a student." : "I'm not a student.";
}

console.log(sayHi(myName));
console.log(add(10, 5));
console.log(ifStudent(isStudent));