const assert = require('assert');

const sum = (a,b) => {
    if ( typeof(a) !== 'number' || typeof(b) !== 'number'){
        throw Error('parameters must be numbers');
    };
    return (a + b);
};

assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');
assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');
assert.throws(() => {
    sum('1', 2);
});

sum(4, '5');
