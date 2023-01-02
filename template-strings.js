const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);

const nome1 = "Leo";
const idade1 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome1} diz: "por favor, quero beber ${idade1 >= 18 ? bebidaMaior : bebidaMenor}"`;

console.log(pedido);