let n = 5;
let square = ""
for (let higth = 1; higth <= n; higth += 1){
    for (let width = 0; width <= n; width += 1){
        square.push("*");
    }
    console.log(square);
}