//  caminhos
let caminhoEstadosInput = document.getElementById("estados");
let caminhoNoDefBtn = document.getElementById("noDef");

//  função adiciona option estados no id:estados
let estadosBR = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
};

function adicionaEstados (objeto){
    for (let key in objeto){
        let optionEstado = document.createElement("option");
        optionEstado.value = key;
        optionEstado.innerText = objeto[key];
        caminhoEstadosInput.appendChild(optionEstado);
    };
};


// adiciona eventlistener em noDef
caminhoNoDefBtn.addEventListener("click", function (event){
    event.preventDefault();
});

//  carrega as funções
window.onload = function (){
    adicionaEstados(estadosBR);
};
