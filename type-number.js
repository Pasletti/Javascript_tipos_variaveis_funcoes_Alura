// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not A Number (não é um número)

const alura = "Alura";
console.log(alura * primeiroNumero);

const exponenciacao = 10e2;
console.log(exponenciacao);

const limiteCasasDecimais = 13.763563098398; // duas casas decimais
const fmtlimiteCasasDecimais = limiteCasasDecimais.toFixed(2);
console.log(fmtlimiteCasasDecimais);

const valorMoeda = limiteCasasDecimais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // transforma numa string
console.log(valorMoeda);

console.log(Math.round(limiteCasasDecimais)); // arredonda para cima, retira casas Decimais
console.log(Math.ceil(limiteCasasDecimais)); // arredonda para cima, retira casas Decimais
console.log(Math.floor(limiteCasasDecimais)); // arredonda para baixo, retira casas Decimais

const listaNumeros = [10, 1, 5, 9, 8, 12, 15]; // ordenação de números
console.log(listaNumeros.sort((a, b) => a - b));

const numerosRepetidos = [5, 3, 5, 3, 8, 0, 1, 3, 2, 1]; // Array com Números repetidos e Desordenados
const numerosSemRepeticao = [... new Set(numerosRepetidos)]; // new Set
const numerosSemRepeticaoEhOrdenados = numerosSemRepeticao.sort((a, b) => a - b);
console.log(numerosSemRepeticaoEhOrdenados);

const numerosRepetidos1 = [5, 3, 5, 3, 8, 0, 1, 3, 2, 1]; // Array com Números repetidos e Desordenados usando Filter
const numerosSemRepeticao1 = numerosRepetidos1.filter((element, index) => numerosRepetidos1.indexOf(element) === index);
const numerosSemRepeticaoEhOrdenados1 = numerosSemRepeticao1.sort((a, b) => a - b);
console.log(numerosSemRepeticaoEhOrdenados1);
