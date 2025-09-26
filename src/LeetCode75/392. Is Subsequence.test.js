import isSubsequence from './392. Is Subsequence.js';

it('abc is a subsequence of ahbgdc', () => {
    expect(isSubsequence('abc','ahbgdc')).toBe(true);
})

it('axc is not a subsequence of ahbgdc', () => {
    expect(isSubsequence('axc','ahbgdc')).toBe(false);
})

it('empty s is a subsequence of ahbgdc', () => {
    expect(isSubsequence('','ahbgdc')).toBe(true);
})