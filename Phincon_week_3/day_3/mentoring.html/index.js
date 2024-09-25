// function pythagoras(a, b) {
//     let c = Math.sqrt(a*a + b*b);
//     return c;
// }
// console.log(pythagoras(4,3));

function quadraticEquation(a, b, c){
    const positive = (-b + Math.sqrt(Math.abs(b * b - 4 * a * c))) / (2 * a * c);
    const negative = (-b - Math.sqrt(Math.abs(b * b - 4 * a * c))) / (2 * a * c);
    return [positive, negative];
}
console.log(quadraticEquation(10, 20, 5))

