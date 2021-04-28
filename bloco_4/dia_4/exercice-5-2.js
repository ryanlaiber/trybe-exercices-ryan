function maisRepete(lista){

    if(typeof lista != "object"){
        return console.log("Não é lista");
     };
    
    let counterCheck = 0;// armazena a quantidade de repetições  do mais popular
    let popular = lista[0];// armazena o valor do mais popular

    for(let number of lista){
        let counter = 0;//contador de repetições 
        for(let compareNumber of lista){
            if(compareNumber === number){
                counter += 1;
            };//conta as repetições
        };
        if(counter > counterCheck){
            counterCheck = counter;
            popular = number;
        };//checa se number é o mais popular e atribui valor para popular
    };

    return console.log(popular);
};

maisRepete([3,2,5,2,3,3,5,5,5,9]);