class Heroi{
    constructor(nome, raca, vida, stamina, nivel, poderAtaque, poderDefesa, ouro){
        this.nome = nome;
        this.raca = raca;
        this.vida = vida;
        this.stamina = stamina;
        this.nivel = nivel;
        this.poderAtaque = poderAtaque;
        this.poderDefesa = poderDefesa;
        this.habilidade = "";
        this.ultimoRoundEspecial = 0;
        this.ouro = ouro;
    }

    atacar(){
        //return `${this.nome} atacou com ${this.poderAtaque} pontos de ataque.`;
        return this.poderAtaque;
    }

    defender(){
        //return `${this.nome} defendeu com ${this.poderDefesa} pontos de defesa.`;
        return this.poderDefesa;
    }

    ganharOuro(valor){
        this.ouro += valor;  
        
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
            Ouro: ${this.ouro}
        `;
    }
}