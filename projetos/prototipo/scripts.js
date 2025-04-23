Array.prototype.meuMap = function (callBackfn){
    let newArray = [];
    for (let i of this){
        newArray.push(callBackfn(i));
    }

    return newArray;
}

Array.prototype.meuFilter = function (callBackfn){
    let newArray = [];
    for (let i of this){
        if (callBackfn(i)){
            newArray.push(i);
        }
        
    }
    return newArray;
}

Array.prototype.meuReduce = function (){
    let soma = 0;
    for (let i of this){
        soma += i;
    }
    return soma
}

Array.prototype.meuForEach = function(callBackfn){
    for (let i of this){
        callBackfn(i);
    }
};

const teste = [1, 2, 3, 4, 5];

const novoTeste = teste.meuMap(el => el * 2);

console.log(novoTeste);

const novoTeste2 = teste.meuFilter(el => el % 2 == 0);

console.log(novoTeste2);
teste.reduce()
const novoTeste3 = teste.meuReduce();

teste.meuForEach(el => console.log(el));


