declare enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
declare function describeColor(color: Color): string;
interface Car {
    make: string;
    model: string;
    year: number;
}
declare class MyCar implements Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    displayDetails(): void;
}
declare const car: MyCar;
