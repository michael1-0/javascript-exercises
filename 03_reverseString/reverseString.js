const reverseString = function(text) {
    let stringTemp = "";

    for (let i = text.length - 1; i >= 0; i--) {
        stringTemp += text.charAt(i);
    }
    
    return stringTemp;
};

// Do not edit below this line
module.exports = reverseString;
