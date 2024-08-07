const sumAll = function(start, end) {
    let sum = 0;

    try {
        if (
            start < 0 || end < 0 ||
            Number.isInteger(start) === false || Number.isInteger(end) === false
        ) {
            return "ERROR";
        } else if (start > end) {
            for (let i = start; i >= end; i--) {
                sum += i;
            }
        } else {
            for (let i = start; i <= end; i++) {
                sum += i;
            }
        }
    } catch(e) {
        return 'ERROR';
    }

    return sum ;
};

// Do not edit below this line
module.exports = sumAll;
