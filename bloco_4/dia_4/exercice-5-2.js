function maisRepete(lista){

    if(typeof lista != "object"){
        return console.log("Não é lista");
     };
    
    let counterCheck = 0;
    let popular = lista[0];

    for(let number of lista){
        let counter = 0;
        let sameNumber = number;
        for(let compareNumber of lista){
            if(compareNumber === sameNumber){
                counter += 1;
            };
        };
        if(counter > counterCheck){
            counterCheck = counter;
            popular = number;
        };
    };

    return console.log(popular);
};

maisRepete([3,2,5,2,3,6,5,8,5,9]);