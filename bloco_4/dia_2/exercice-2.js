let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0

for(let number = 0; number < numbers.length; number += 1){
    som = som + numbers[number];
};

console.log(som);