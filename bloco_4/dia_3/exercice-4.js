

let n = 51;
let dot = "*";
let space = " ";


for(let i = n; i > 0; i -= 1){

    let square = "";
    let line = n - i;
    let spaceNumber = i;
    let dotNumber = line - spaceNumber;

    for(let iSpaces = 0; iSpaces < spaceNumber; iSpaces += 1){
        square += space;
    };

    for(let iDots = 0; iDots < dotNumber; iDots += 1){
        square += dot;
    };

    console.log(square);
};

let base = "";

for(let counter = 0; counter < n; counter += 1){
    base += dot;
};

console.log(base);
