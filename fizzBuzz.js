const resul = fizzBuzz(15);
console.log(resul);


function fizzBuzz(val) {
    if (val % 3 === 0 && val % 5 === 0) {
        return 'fizzBuzz';
    } else if (typeof val !== "number") {
        return 'nao e um numero'
    } else if (val % 5 === 0) {
        return 'Buzz';
    } else if (val % 3 === 0) {
        return 'Fizz';
    } else (val % 3 !== 0 && val % 5 !== 0)
    return 'entrada';

}