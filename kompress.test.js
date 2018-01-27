const test = require('tape');

const compress = require('./kompress');

test('kompress should return "a" when "a" is passed', (assert) => {
    const actual = compress('a');
    const expected = 'a';
    assert.equal(actual, expected);
    assert.end();
});

test('kompress should return "a2" when "aa" is passed', (assert) => {
    const actual = compress('aa');
    const expected = 'a2';
    assert.equal(actual, expected);
    assert.end();
});

test('kompress should return "a3" when "aaa" is passed', (assert) => {
    const actual = compress('aaa');
    const expected = 'a3';
    assert.equal(actual, expected);
    assert.end();
});

test('kompress should return "a2b" when "aab" is passed', (assert) => {
    const actual = compress('aab');
    const expected = 'a2b';
    assert.equal(actual, expected);
    assert.end();
});

test('kompress should return "a2b2" when "aabb" is passed', (assert) => {
    const actual = compress('aabb');
    const expected = 'a2b2';
    assert.equal(actual, expected);
    assert.end();
});

test('kompress should return "a2b2c" when "aabbc" is passed', (assert) => {
    const actual = compress('aabbc');
    const expected = 'a2b2c';
    assert.equal(actual, expected);
    assert.end();
});


test('kompress should return "a2b2ca3" when "a2b2c" is passed', (assert) => {
    const actual = compress('aabbcaaa');
    const expected = 'a2b2ca3';
    assert.equal(actual, expected);
    assert.end();
});


test('kompress should return "" when "" is passed', (assert) => {
    const actual = compress('');
    const expected = '';
    assert.equal(actual, expected);
    assert.end();
});
