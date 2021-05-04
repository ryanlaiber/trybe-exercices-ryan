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
    if (day === 24 || day === 31){
      dayLi.classList.add("holiday");
    }else if (day === 4 || day === 11 || day === 18 ){
      dayLi.classList.add("friday");
    }else if (day === 25){
      dayLi.classList.add("friday");
      dayLi.classList.add("holiday");
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
  }else{
    for (let day in holidays){
      holidays[day].style.backgroundColor = "rgb(238,238,238)";
      feriadosButton = false;
    };
  };
});

function sextaFeiraFunction(nome){
  let sextaFeira = document.createElement("button");
  sextaFeira.setAttribute("id", "btn-friday");
  sextaFeira.innerText = nome;
  document.querySelector(".buttons-container").appendChild(sextaFeira);
};

sextaFeiraFunction("Sexta-feira");

let fridayBtn = document.getElementById("btn-friday");

let fridayList = document.getElementsByClassName("friday");
let fridayButton = false;
let noFriday = [4, 11, 18, 25];

fridayBtn.addEventListener("click", function (){
  if (fridayButton === false){
    for (let day in fridayList){
      let d = fridayList[day]; 
      d.innerText = "SEXTOU!!";
      fridayButton = true;
    }
  }else{
    for (let day in fridayList){
      let d = fridayList[day];
      d.innerText = noFriday[day];
      fridayButton = false;
    };
  };
});

function size (event){
  event.target.style.fontSize = "2em";
};

function defautSize (event){
  event.target.style.fontSize = "20px";
}

let days = document.getElementsByClassName("day");

function tarefas (tarefa){
  let task = document.createElement("span");
  task.innerText = tarefa;
  document.querySelector(".my-tasks").appendChild(task);
};

tarefas("Estudar");

function legenda (cor){
  let legend = document.createElement("div");
  legend.classList.add ("task");
  legend.style.backgroundColor = cor;
  document.querySelector(".my-tasks").appendChild(legend);
};
let txtcollor = "green";
legenda(txtcollor);

let task = document.querySelector(".task");

let btnTask = false;

function selectTask (event){
  if (btnTask === false){
    event.target.classList.add("selected");
    btnTask = true;
  }else{
    event.target.classList.remove("selected");
    btnTask = false;
  };
};

task.addEventListener("click", selectTask);

let selectedTask = document.querySelector(".selected");

function taskColor(event){
  if (event.target.style.color != txtcollor){
    event.target.style.color = txtcollor;
  }else{
    event.target.style.color = "rgb(119,119,119)";
  };
};

for (let i of days){
  i.addEventListener("mouseover", size);
  i.addEventListener("mouseout", defautSize);
  i.addEventListener("click", taskColor);
};
