/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // How do we know we are at the end of a group
    // if the next letter is not equal to the previous
    // Hold the first letter
    const temp = [];
    let currentLetter = chars[0];
    let count = 0;
    // Iterate
    chars.forEach(char => {
        if (char !== currentLetter) {
            temp.push(currentLetter);
            temp.push(count.toString());            
            // If the other number is not matching with the first letter
            // then replace the current letter with the new
            // place on the temp array [letter, count]
            currentLetter = char;
            count = 1;   
        } else {
            count++;
        }
    });
    temp.push(currentLetter);
    temp.push(count.toString());

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