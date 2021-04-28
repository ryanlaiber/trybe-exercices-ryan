function menorNumero(lista){
    if(typeof lista != "object"){
       return console.log("Não é lista");
    };

    let maior = lista[0];

    for(let number of lista){
        if(number < maior){
            maior = number;
        };
    };

    return console.log(maior);
};

menorNumero([1,2,3]);