// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it 
// into an arrow function.

function areaCalculation(width:number,hieght:number):number {
    return width * hieght
}

let areaCalculationArrow = (width:number, hiegth: number):number => width * hiegth;

console.log(areaCalculationArrow (5,7));
