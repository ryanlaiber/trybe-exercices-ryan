let brut = 5700;
let inss = 0.08;
let ir = 0;
let maxInss = 0;
let impostoTotal = 0;
let liquido = brut
let reducaoParcela = 0

if (brut > 1903.98){
    if (brut > 2594.92){
        if (brut > 2826.65){
            if (brut > 3751.05){
                if (brut > 4664.68){
                    if (brut > 5189.82){
                        maxInss = 570.88;
                        inss = 0
                    }else{
                        inss = 0.11;
                    

                    }
                }else{
                    inss = 0.11;
                
                }
            }else{
                inss = 0.11;
        
            }
        }else{
            inss = 0.11;
        
        }
    }else{
        inss = 0.09;
    
    }
}

brut = brut - (brut * inss) - maxInss;

if (brut > 1903.98){
    if (brut > 2594.92){
        if (brut > 2826.65){
            if (brut > 3751.05){
                if (brut > 4664.68){
                    reducaoParcela = 869.36
                    ir = 0.275
                }else{
                    reducaoParcela = 636.13;
                    ir = 0.225;
                }
            }else{
                reducaoParcela = 354.80;
                ir = 0.15;
            }
        }else{
            reducaoParcela = 142.80
            ir = 0.075;
        }
    }else{
        reducaoParcela = 142.80;
        ir = 0.075;
    }
}


liquido = brut - ((brut * ir) - reducaoParcela);

console.log("Bruto: " + brut + " ir: " + ir + " inss: " + inss + " redução de parcela: " + reducaoParcela + " maxInss: " + maxInss)
console.log("Salário líquido: R$" + liquido);
