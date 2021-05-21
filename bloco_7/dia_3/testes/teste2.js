const assert = require('assert');

list = [1, 2, 3];

const myRemove = (arr, item) => {
    if (arr.includes(item)){
        let newArr = [];
        for (let i of arr){
            if ( i !== item){
                newArr.push(i);
            };
        };
        return newArr;
    };
    return arr;
};

myRemove(list, 3);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.strictEqual(list, list);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);


console.log(myRemove([1, 2, 3, 4], 5));