class Calculo {
    constructor(nome, disciplina, nota1, nota2) {
        this.nome = nome;
        this.disciplina = disciplina;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.media = (nota1 + nota2) / 2;
    }

    mostrarNomeEMedia() {
        console.log("\nNome e Média:\n")
        console.log(`nome: ${this.nome}\nmédia: ${this.media}`);
    }
    
    mostrarNomeENotas() {
        console.log("\nNome e Notas:\n")
        console.log(`nome: ${this.nome}\nnota1: ${this.nota1}\nnota2: ${this.nota2}
        `);
        
    }
    
    mostrarMedia() {
        console.log("\nApenas média:\n")
        console.log(`média: ${this.media}`);
    }
}

const aluno = new Calculo('Jay Show', 'Programação I', 9, 10);

aluno.mostrarNomeEMedia();
aluno.mostrarNomeENotas();
aluno.mostrarMedia();