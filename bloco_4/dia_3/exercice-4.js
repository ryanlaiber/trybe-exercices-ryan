let n = 5;
let t = "*";
let s = " ";
let square = "";

for (let l = 0; l < n; l += 1){

    if (square.length == 0){

        for (let c = 0; c < n; c += 1){
            square = square + t;
        }
        console.log(square); 

    }else if (square.length > 0){

        square = "";
        let o = n - (2 * l) ;
        let le = (n - l) - o;
        for (let spaces = 0; spaces < le; spaces += 1){
            square = square + s;
        };
        for (let dots = 0; dots < o; dots += 1){
            square = square + t;
        };
        
        console.log(square);
        }
    }
