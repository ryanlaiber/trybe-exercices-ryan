document.getElementsByTagName("p")[0].innerText = "Eu vou ser um ótimo dev";
document.getElementsByClassName("main-content")[0].style.backgroundColor = "green";
function backgroundColorChangeByClass(classToChange, colorChange){
    document.getElementsByClassName(classToChange)[0].style.backgroundColor = colorChange;
};
backgroundColorChangeByClass("center-content", "white");
function correctTextTitle(){
    if (document.getElementsByClassName("title")[0].innerText != "Exercício 5.1 - JavaScript"){
        document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
    };
};
correctTextTitle();
function upperCaseTagText(tagToChange){
    for(let text in document.getElementsByTagName(tagToChange)){
        document.getElementsByTagName(tagToChange)[text].innerText = document.getElementsByTagName(tagToChange)[text].innerText.toUpperCase();
    };
};
upperCaseTagText("p");
function ShowTagContent(tagName){
    for (let i in document.getElementsByTagName(tagName)){
        console.log(document.getElementsByTagName(tagName)[i].innerHTML);
    };
};
ShowTagContent("p");
/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
    3. Crie uma função que mude a cor do quadrado vermelho para branco.
    4. Crie uma função que corrija o texto da tag <h1>.
    5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
    6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/ 