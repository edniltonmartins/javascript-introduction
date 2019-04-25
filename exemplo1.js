// c-like é o javascript

const valor = 10;

// Dois iguais tenta parsear pra chegar no tipo do valor
// Três iguais tenta verificar o tipo e o valor
if (valor===10){
    //valor = 20
}

let valor2 = 10;

valor2+=10

console.log( `imprimindo a constante valor: ${valor}`);
console.log( `imprimindo a variável criada com let ${valor2}`);

const objeto = { chave1: "valor1", chave2: "valor2"};
console.log(objeto)

const str = "Ednilton Maritns - DevPleno";

const soma = function(a, b){
    return a + b
}
console.log(soma(1,2));

const calculadora = function(op, a, b){
    return op(a,b);
}

//passando uma função para outra função e recebendo parâmetros da outra
console.log(calculadora(soma, 2,3));

const vetor = [1,2,3,4,5];

const dobrado = vetor.map(function(item){
    return item*2;
})

const objetoDoVetor = vetor.map(function(item){
    return {original: item, dobrado: item*2};
} )

console.log(vetor, dobrado);

console.log("vamos ver a transformação", objetoDoVetor)

const pares = vetor.filter(function(item){
    return item % 2 === 0
})

const paresDobrados = vetor.filter(function(item){
    return item % 2 === 0
}).map(function(item){
    return item * 2
})

console.log("Pares: ", pares);

console.log("Pares dobrados: ", paresDobrados);