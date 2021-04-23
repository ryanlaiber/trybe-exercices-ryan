// ordem decrescente
let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let index = 1; index < numbers.length; index ++){
    for (let index2 = 0; index2 < numbers.length; index2 ++){
        if (numbers[index2] < numbers[index]){
            let position = numbers[index2];
            numbers[index2] = numbers[index];
            numbers[index] = position;
        }
    }
}

console.log(numbers);