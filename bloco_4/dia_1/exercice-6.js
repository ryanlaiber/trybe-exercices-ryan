let a = "cavalo";
let b = a.toLowerCase();

switch (b){
    
    case "horse":
        console.log("move and L any side");
        break;
    
    case "peon":
        console.log("one case on diagonals");
        break;
    
    case "bishop":
        console.log("diagonals");
        break;
    
    case "queen":
        console.log("any direction")
        break;

    case "king":
        console.log("one case any direction");
        break;

    case "tower":
        console.log("any side");
        break;

    default:
        console.log("that's not a chess piece");

    
}