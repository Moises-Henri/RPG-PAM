class Heroi{
    constructor(nome, raca, vida, stamina, nivel, poderAtaque, poderDefesa){
        this.nome = nome;
        this.raca = raca;
        this.vida = vida;
        this.stamina = stamina;
        this.nivel = nivel;
        this.poderAtaque = poderAtaque;
        this.poderDefesa = poderDefesa;
        this.habilidade = "";
        this.ultimoRoundEspecial = 0;
        this.equipamentos = [];
    }

    atacar(){
        //return `${this.nome} atacou com ${this.poderAtaque} pontos de ataque.`;
        return this.poderAtaque;
    }

    defender(){
        //return `${this.nome} defendeu com ${this.poderDefesa} pontos de defesa.`;
        return this.poderDefesa;
    }

    receberDano(dano){
        this.vida -= dano;
        if(this.vida < 0){
            this.vida = 0;
        }
    }

    gastarStamina(valor){
        this.stamina -= valor;
        if(this.stamina < 0){
            this.stamina = 0;
        }
    }

    ganharExperiencia(valor){
        this.nivel += valor;
    }

    podeUsarEspecial(roundAtual){
        return roundAtual - this.ultimoRoundEspecial >= 2;
    }

    registrarUsoEspecial(roundAtual){
        this.ultimoRoundEspecial = roundAtual;
    }
    aplicarBonus({
        ataque = 0,
        defesa = 0,
        vida = 0
    } = {}){
        this.poderAtaque += ataque;
        this.poderDefesa += poderDefesa;
        this.vidaMaxima+= vida;
        this.vida += vida;
    }

    equipar(equipamento){
        if(!equipamento){
            throw new Error("Equipamento inválido.");
        }
        if(
            typeof equipamento.obterBonus !== "function"
        ){
            throw new Error("O objeto informado não é um equipamento válido.");
        }
        const equipamentoJaAdicionado = 
        this.equipamento.some(
            (item) => item.nome === equipamento.nome
        );
    if(equipamentoJaAdicionado){
        return false;
    }

    const bonus = equipamento.obterBonus();
    this.aplicarBonus(bonus);
    this.equipamento.push(equipamento);
    return true;

    }
    exibirStatus(){
        return `
            Nome: ${this.nome}
            Raça: ${this.raca}
            Vida: ${this.vida}
            Stamina: ${this.stamina}
            Nivel/XP: ${this.nivel}
            Ataque: ${this.poderAtaque}
            Defesa: ${this.poderDefesa}
            Habilidade: ${this.habilidade}
            Equipamento: ${this.equipamentos.length}
        `;
    }
}