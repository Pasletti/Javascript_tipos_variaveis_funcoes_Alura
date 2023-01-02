const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leonardo";

// concatenação (+)

console.log(citacao + meuNome);

//template string OU template literal
const templateString = `Estou executando javascript ${meuNome} da "Alura"`;
console.log(templateString);

// Unicode UTF - Unicode Transformation Format - https://home.unicode.org/
console.log(`Teste de mensagem \u3041 com codigo unicode`)

// toLowerCase() e toUpperCase()
const cidade = "belo Horizonte";
const input = "Belo Horizonte";

const cidadeMinusculo = cidade.toLowerCase();
const inputMinusculo = input.toLowerCase();

console.log(cidadeMinusculo == inputMinusculo);

// length
const senha1 = "minhaSenha123";
console.log(senha1.length); // 13 caracteres
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos