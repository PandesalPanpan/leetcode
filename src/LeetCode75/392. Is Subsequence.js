/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export default isSubsequence = function (s, t) {
    if (s == '' && t) return true;
    let pointer = 0;
    const sequence = t.split('');

    sequence.forEach((char) => {
        if (char == s[pointer]) {
            pointer++;
        }
    })

    return pointer == s.length;
};