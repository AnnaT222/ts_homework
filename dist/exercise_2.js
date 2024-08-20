"use strict";
// ---------------------------task 1--------------------
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function describeColor(color) {
    return `The color is ${color}.`;
}
console.log(describeColor(Color.Red));
class MyCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}
const car = new MyCar("Porsche", "Panamera", 2024);
car.displayDetails();
