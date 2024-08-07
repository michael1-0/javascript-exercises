const leapYears = function(year) {
    if ((year % 100 === 0) === true) {
        if ((year % 400 === 0) === true) {
            return true
        } else {
            return false;
        }
    }
    return (year % 4 === 0) === true;
};

// Do not edit below this line
module.exports = leapYears;
