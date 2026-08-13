class Pocao extends Equipamento{
    constructor(
        nome,
        descricao,
        pontoAtaque,
        pontoDefesa,
        habilidade,
        tipoPocao,
        efeito
    ){
        super(nome, descricao, pontoAtaque, pontoDefesa, habilidade);
        this.tipoPocao = tipoPocao;
        this.efeito = efeito;
    }

    exibirDetalhes(){
        return `
            ${super.exibirDetalhes()}
            Tipo de Poção: ${this.tipoPocao}
            Efeito: ${this.efeito}
        `;
    }
}