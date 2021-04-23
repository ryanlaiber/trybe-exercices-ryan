let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor;
let maior = 0;

for(number of numbers){
    if(number > maior){
        maior = number;
    };
};

menor = maior;

for(number of numbers){
    if(number < menor){
        menor = number;
    };
};

console.log(menor);
