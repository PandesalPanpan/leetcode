import isSubsequence from './392. Is Subsequence.js';

it('abc is a subsequence of ahbgdc', () => {
    expect(isSubsequence('abc','ahbgdc')).toBe(true);
})

it('axc is a subsequence of ahbgdc', () => {
    expect(isSubsequence('axc','ahbgdc')).toBe(false);
})