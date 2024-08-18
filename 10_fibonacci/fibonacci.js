const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0 || num === "0") return 0;
    let numbers = [0, 1];
    for (let i = 2; i <= Number(num); i++) {
        numbers[i] = numbers[i-1] + numbers[i-2];
    } 
    return numbers[numbers.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
