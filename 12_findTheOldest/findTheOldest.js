const findTheOldest = function(arr) {
    return arr.sort((a, b) => {
        if (!(Object.hasOwn(a, "yearOfDeath"))) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (!(Object.hasOwn(b, "yearOfDeath"))) {
            b.yearOfDeath = new Date().getFullYear();
        }
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    })[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
