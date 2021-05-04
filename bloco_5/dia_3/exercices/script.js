function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let daysUl = document.getElementById("days");

function daysList (){
  for (let day of dezDaysList){//
    let dayLi = document.createElement("li");
    dayLi.classList.add("day");
    if (day === 24 || day === 25 || day === 31){
      dayLi.classList.add("holiday");
    }else if (day === 4 || day === 11 || day === 18 || day === 25){
      dayLi.classList.add("friday");
    };
    dayLi.innerText = day;
    daysUl.appendChild(dayLi);
  };
};

daysList();

function feriadosFunction (feriados){
  let button = document.createElement("button");
  button.setAttribute("id","btn-holiday");
  button.innerText = feriados;
  document.querySelector(".buttons-container").appendChild(button);
};

feriadosFunction("Feriados");

let feriados = document.getElementById("btn-holiday");


let feriadosButton = false;

feriados.addEventListener("click", function (){
  let holidays = document.getElementsByClassName("holiday");
  if (feriadosButton === false){
    for (let day in holidays){
      holidays[day].style.backgroundColor = "yellow";
      feriadosButton = true;
    };
  }else if (feriadosButton ===true){
    for (let day in holidays){
      holidays[day].style.backgroundColor = "rgb(238,238,238)";
      feriadosButton = false;
    };
  };

});

