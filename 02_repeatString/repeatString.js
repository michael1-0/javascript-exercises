const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR"
    }
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += text;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
