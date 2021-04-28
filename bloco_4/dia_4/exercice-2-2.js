function maiorNumero(lista){
    if(typeof lista != "object"){
        console.log("Não é lista");
    };

    let maior = 0;

    for(let number of lista){
        if(number > maior){
            maior = number;
        };
    };

    return console.log(maior);
};

maiorNumero([1,10,3,4]);