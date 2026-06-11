class PocaoMana extends Pocao {
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
        this.quantidadeMana = 20; 
    }

    usar(){
        console.log("Poção utilizada e restaurou " + this.quantidadeMana + " pontos de mana");

    }
}