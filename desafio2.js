calculoRankeada(120,10)


function calculoRankeada (vitorias, derrotas){
let saldoRankeada = vitorias - derrotas 

if (saldoRankeada <=10){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo de Ferro")
} else if(saldoRankeada >=11 && saldoRankeada<=20){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo de Bronze")
} else if(saldoRankeada >=21 && saldoRankeada<=50){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo de Prata")
} else if(saldoRankeada >=51 && saldoRankeada<=80){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no ELo de Ouro")
} else if(saldoRankeada >=81 && saldoRankeada<=90){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo de Diamante")
} else if(saldoRankeada >=91 && saldoRankeada<=100){
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo Lendário")
} else {saldoRankeada > 100
    console.log("O Héroi tem o saldo de " + saldoRankeada + " e está no Elo Imortal")

}
}