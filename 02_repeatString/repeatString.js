const repeatString = function(phrase, number) {
    if(number<0){
        return "ERROR"
    } else {
        let emptyString = "";
        for (let i = 0; i < number; i++) {
            emptyString = emptyString+phrase;
        }
        return emptyString;
    }
};

// Do not edit below this line
module.exports = repeatString;
