function palindromo(word){
    if(typeof word != "string"){
        return console.log('Não é String.');
    };//confere se é string

    let flag = true; //acusador de palíndromo ou não
    let rev = word.length - 1; //index inverso

    for(let letras in word){
        if(word[letras] != word[rev]){
            flag = false;
        };
        rev -= 1;
    };

    if(flag === true){
        return console.log("Palíndromo");
    }else{
        return console.log("Não é palíndromo");
    };// confere o acusador de palíndromo
};

palindromo("ava");


