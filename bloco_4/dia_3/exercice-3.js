let n = 5;


for(let x = 0; x < n; x += 1){
    
    let square = "";
    
    for(let i = n - x; i > 0; i -= 1){
        square += "*";
    };
    console.log(square);

}