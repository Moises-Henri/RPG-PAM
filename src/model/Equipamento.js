class Equipamento{
    constructor(nome, descricao, pontoAtaque, pontoDefesa, habilidade){
        this.nome = nome;
        this.descricao = descricao;
        this.pontoAtaque = pontoAtaque;
        this.pontoDefesa = pontoDefesa;
        this.habilidade = habilidade;
    }

    exibirDetalhes(){
        return `
            Nome: ${this.nome}
            Descrição: ${this.descricao}
            Ataque: ${this.pontoAtaque}
            Defesa: ${this.pontoDefesa}
            Habilidade: ${this.habilidade}
        `;
    }
}