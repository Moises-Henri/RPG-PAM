class Armadura extends Equipamento{
    constructor(
        nome,
        descricao,
        pontoAtaque,
        pontoDefesa,
        habilidade,
        durabilidade,
        tipoArma
        
    ){
        super(nome, descricao, pontoAtaque, pontoDefesa, habilidade);
        this.durabilidade = durabilidade;
        this.tipoArma = tipoArma;
        
    }

    exibirDetalhes(){
        return `
            ${super.exibirDetalhes()}
            Durabilidade: ${this.durabilidade}
            Tipo de Arma: ${this.tipoArma}            
        `;
    }
}