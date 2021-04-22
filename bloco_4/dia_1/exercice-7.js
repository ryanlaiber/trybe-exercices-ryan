let a = 90;

if (a >= 50){
    if (a >= 60){
        if (a >= 70){
            if (a >= 80){
                if (a >= 90){
                    if (a > 100){
                        console.log("ERRO: a nota ultrapassou os limites")
                    }else{
                        console.log("A")
                    }
                    

                }else{
                    console.log("B")
                }
            }else{
                console.log("C")
            }
        }else{
            console.log("D")
        }
    }else{
        console.log("E")
    }
}else if (a < 0){
    console.log("ERRO: nota impossível")
}else{
    console.log("F")
}