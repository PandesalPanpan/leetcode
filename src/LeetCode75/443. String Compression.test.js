import compress from './443. String Compression'

it('compress function exists', () => {
    expect(typeof compress).toBe('function');
})

// Modify an array
it('Case 1', () => {
    const input = ["a", "a", "b", "b", "c", "c", "c"];
    const expected = ["a","2","b","2","c","3"];
    expect(compress(input)).toBe(expected.length);
    expect(input).toEqual(expected);

})

/* it('Case 2', () => {
    const input = ["a"]
    const expected = ["a"]
    expect(compress(input)).toBe(expected.length);
    expect(input).toEqual(expected);
}) */
