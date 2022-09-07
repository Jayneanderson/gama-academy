const { calcularValorCompra } = require('./CalcularValor.js');
class Livro {
    constructor(nome, quantidade, valor) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}
                     //nome, quantidade, valor
var livro = new Livro('Jogador Nº 1', 2, 2.30);

var valorBruto = calcularValorCompra(livro.quantidade, livro.valor);

console.log(valorBruto)