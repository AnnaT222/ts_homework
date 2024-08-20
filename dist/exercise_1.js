"use strict";
let age = 21;
let myName = "Anna";
let isStudent = true;
function sayHi(personName) {
    return `Hello, ${personName}!`;
}
function add(a, b) {
    return a + b;
}
function ifStudent(studentStatus) {
    return studentStatus ? "I'm a student." : "I'm not a student.";
}
console.log(sayHi(myName));
console.log(add(10, 5));
console.log(ifStudent(isStudent));
