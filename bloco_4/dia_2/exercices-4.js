let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;
let media;

for(let number = 0; number < numbers.length; number += 1){
    som = som + numbers[number];
};

media = som / numbers.length;

if(media > 20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor que 20");
};