const sum = (a, b) => {
    if(!(a && b)){ //if a and b are not truthy. If I don't have a and b can't function
        return "Invalid Input"
    }
    return a + b;
} 

const square = (a) => {
    if(!a) {
        return "Invalid Input"
    }
    return a * a;
}

const cube = (a) => {
    if(!a) {
        return "Invalid Input"
    }
        return a * a * a;
}

// const exponent = (num, power) => {
//     return num ** power
// }

module.exports = {sum, square, cube};

