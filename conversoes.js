// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = Number("456a");

// Number()
// parseFloat()
// parseInt()
// String()
// toString()
console.log(numero + numeroString)

// Conversao de booleano para number
let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// conversão explícita

// console.warn(new Error('oi'))