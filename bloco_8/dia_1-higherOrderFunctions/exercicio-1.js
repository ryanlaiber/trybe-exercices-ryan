// função que retorna objeto pessoa.
const cadastra = nome => {
    let email = '';
    for (let letra of nome) {
        if (letra === ' ') {
            email += '_';
        }else {
            email += letra.toLowerCase();
        }
    };

    return { nome: nome, email: `${email}@trybe.com` };
};

// cria objeto para cadastrar pessoas 
let cadastro = {};
// cria função de cadastro
const newEmployees = (name, tipoCadastro) => {
    let id = Object.keys(cadastro).length;
    cadastro[id] = tipoCadastro(name);
};

newEmployees('ryan Laiber', cadastra);
newEmployees('larissa Paganini', cadastra);

console.log(cadastro);