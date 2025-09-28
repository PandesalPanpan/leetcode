/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    const temp = [];
    let currentLetter = chars[0];
    let count = 0;
    chars.forEach(char => {
        if (char !== currentLetter) {
            temp.push(currentLetter);
            if (count !== 1) {
                temp.push(count.toString());            
            }
            currentLetter = char;
            count = 1;   
        } else {
            count++;
        }
    });
    temp.push(currentLetter);
    if (count !== 1) {
        temp.push(count.toString());
    }
    

    // Clean up the chars
    while (chars.length > 0) {
        chars.pop();
    }

    temp.forEach((element) => {
        chars.push(element);
    })
    

    return chars.length;
};

const input = ["a", "a", "b", "b", "c", "c", "c"];
compress(input);

module.exports = compress;