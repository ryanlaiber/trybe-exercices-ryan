let custo = 50;
let venda = 90;
let custoReal = null;
let lucro = null

if (custo < 0 || venda < 0){
    console.log("ERRO: Valor impossível");
}else{
    custoReal = custo * 1.2;
    lucro = venda - custoReal
    console.log("Lucro total de: "+ (lucro * 1000))

}
