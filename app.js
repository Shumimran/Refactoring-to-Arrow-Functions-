// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it 
// into an arrow function.
function areaCalculation(width, hieght) {
    return width * hieght;
}
var areaCalculationArrow = function (width, hiegth) { return width * hiegth; };
console.log(areaCalculationArrow(5, 7));
