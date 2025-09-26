/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;    
    for (const number of nums) {
        if (number < first) {
            first = number;
        } else if (number < second) {
            second = number;
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet(big))
