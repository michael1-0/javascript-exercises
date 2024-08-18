    const palindromes = function (text) {
        let modifiedText = text.replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]/g, "").toLowerCase();

        let reverseText = modifiedText.split('').reverse().join("");

        return (modifiedText === reverseText) ? true : false; 
    };

// Do not edit below this line
module.exports = palindromes;
