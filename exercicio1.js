/*
Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce
*/

const vetor = [1,2,3,4,5];

let sum = 0;


// com for
for(let i=0; i<vetor.length; i++){
    sum = sum + vetor[i];
}

// agora com reduce
const soma = vetor.reduce((total,valor)=>total+valor, 0);
console.log('soma ', soma);

