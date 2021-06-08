// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const reqJson = {
    method: 'GET',
    headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, reqJson)
    .then(response => response.json())
    .then(response => document.querySelector('h1').innerHTML = response.joke);

  return new Promise((resolve, reject) => {
    const arr = Array.from({ length: 10 },
      () => Math.floor(Math.random() * 51));
    (arr[0] > 20) ? resolve(arr) : reject('oioi');
  }).then(response => console.log(response[0])).catch(msg => console.log(msg));
};

window.onload = () => fetchJoke();