const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() *11);
    if (number <=5) {
        return reject(console.log(`Fracasso, nosso número foi ${number}.`)
        );
    }
    resolve(console.log(`Sucesso! Nosso número foi ${number}!`));
});