/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {

    let temp = [];
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
    temp = splitSingle(temp)
    temp.forEach((element) => {
        chars.push(element);
    })


    return chars.length;
};

const splitSingle = (array) => {
    const combined = array.join('');
    const separate = combined.split('');
    return separate;
}

module.exports = compress;