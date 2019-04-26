/**
 * Dado um vetor de números,
 * como poderia ser utilizada a soma de
 * todos os valores pares utilizando reduce e filter
 */

 const vetor = [1,2,3,4,5];

 const ehPar = numero => numero % 2 === 0;
 const somadora = (total, atual) => total + atual
 const soma = vetor.filter(ehPar).reduce(somadora, 0)
 console.log('soma dos pares', soma)