const lesson1 = {
materia: 'Matemática',
numeroEstudantes: 20,
professor: 'Maria Clara',
turno: 'manhã',
};

const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};

//resolução exercício
//exercício 1
const addTurnoL2 = (obj, key, value) =>{
    obj[key] = value;
    console.log(obj);
};

console.log("1:")
addTurnoL2(lesson2, 'turno', 'manhã');

//exercício 2
const listaKeys = obj =>{
    let list = Object.keys(obj);
    for (let key of list){
        console.log(key);
    };
};

console.log("2:");
listaKeys(lesson2);

//exercício 3
const objLength = obj =>{
    let list = Object.keys(obj);
    console.log(list.length);
};

console.log("3:");
objLength(lesson2);

//exercício 4
const listValue = obj =>{
    let list = Object.values(obj);
    for (let value of list){
        console.log(value);
    };
};

console.log("4:");
listValue(lesson2);

//exercício 5
const allLessons = (obj1, obj2, obj3) =>{
    let allObj = {};
    allObj.lesson1 = obj1;
    allObj.lesson2 = obj2;
    allObj.lesson3 = obj3;

    return allObj;
};

console.log('5:');
console.log(allLessons(lesson1, lesson2, lesson3));
let allObjects = allLessons(lesson1, lesson2, lesson3);

//exercício 6
const numEstudantes = obj =>{
    let total = 0;
    for (let key in obj){
        total += obj[key].numeroEstudantes;
    };

    return total;
};

console.log('6:');
console.log(numEstudantes(allObjects));

//exercício 7
const valueKey = (obj, position) =>{
    let value = Object.values(obj)[position];
    return value;
};

console.log("7:");
console.log(valueKey(lesson1, 0));

//exercício 8
const confereObj = (obj, key, value) =>{
    let listList = Object.entries(obj);
    let checkList = [key, value];
    let flag = false;
    for (let list of listList){
        let flag2 = 0;
        for (let i = 0; i < checkList.length; i+= 1){
            if (list[i] === checkList[i]){
                flag2 += 1;
            }else{
                flag2 = 0;
            };
        };
        if (flag2 === 2){
            flag = true;
        };
    };
    if (flag === true){
        return true;
    }else {
        return false;
    };
};

console.log('8:')
console.log(confereObj(lesson3, 'professor', 'Maria Clara'));