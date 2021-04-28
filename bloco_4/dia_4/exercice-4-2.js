function maiorPalavra(lista){
    if(typeof lista != "object"){
        return console.log("Não é lista");
    }

    for(let words of lista){
        if(typeof words != "string"){
            return console.log("todos elementos devem ser strings");
        };
    };

    let maior = lista[0];

    for(let palavra of lista){
        if(palavra.length > maior.length){
            maior = palavra;
        };
    };

    return console.log(maior);
};

maiorPalavra(["ab","abacate","abcd"]);
