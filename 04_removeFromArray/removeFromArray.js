const removeFromArray = function(array) { 
    const uniqueArr = [...new Set(array)];
    for (var i = 1; i < arguments.length; i++) {
        if (uniqueArr.includes(arguments[i])) {
            let index = uniqueArr.indexOf(arguments[i]);
            uniqueArr.splice(index, 1);
        }
        
    }
    return uniqueArr;
};

// Do not edit below this line
module.exports = removeFromArray;
