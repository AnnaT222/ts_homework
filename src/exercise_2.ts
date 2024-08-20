// ---------------------------task 1--------------------
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function describeColor(color: Color): string {
    return `The color is ${color}.`;
}

console.log(describeColor(Color.Red));

// ---------------------------task 2---------------------------
interface Car {
    make: string;
    model: string;
    year: number;
}

class MyCar implements Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

const car = new MyCar("Porsche", "Panamera", 2024);
car.displayDetails();