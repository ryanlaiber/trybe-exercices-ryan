let title = document.createElement("h1");//create element h1
document.querySelector("body").appendChild(title);//add element h1 in body
title.innerHTML = "Exercício 5.2 - JavaScript DOM";//add text inside h1

let divMainContent = document.createElement("div");
divMainContent.classList.add("main-content");
document.querySelector("body").appendChild(divMainContent);

let divCenterContent = document.createElement("div");
divCenterContent.classList.add("center-content");
document.querySelector(".main-content").appendChild(divCenterContent);

let pCenterContent = document.createElement("p");
pCenterContent.innerHTML = "amo <em>Coca Cola<em>";
document.querySelector(".center-content").appendChild(pCenterContent);

let divRightContent = document.createElement("div");
divRightContent.classList.add("right-content");
document.querySelector(".main-content").appendChild(divRightContent);

let divLeftContent = document.createElement("div");
divLeftContent.classList.add("left-content");
document.querySelector(".main-content").appendChild(divLeftContent);

let smallImg = document.createElement("img");
smallImg.classList.add("small-img");
smallImg.src = "https://picsum.photos/200";
smallImg.alt = "small image";
document.querySelector(".left-content").appendChild(smallImg);

let ulList = document.createElement("ul");
document.querySelector(".right-content").appendChild(ulList);

let numberList = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];

for (let index of numberList){
    number = index;
    let numberInside = document.createElement("li");
    document.querySelector("ul").appendChild(numberInside);
    numberInside.innerHTML = number;
};

for (let i = 0; i < 3; i += 1){
    let h3Tag = document.createElement("h3");
    document.querySelector(".main-content").appendChild(h3Tag);
};

document.querySelector("h1").classList.add("title");
