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