class Batalha{
    constructor(heroiJogador, heroiAdversario){
        this.heroiJogador = heroiJogador;
        this.heroiAdversario = heroiAdversario;
        this.round = 1;
    }

    iniciar(){

        return `⚔️ Batalha iniciada entre ${this.heroiJogador.nome} e ${this.heroiAdversario.nome}`;
    }

    calcularDano(acaoAtacante, acaoDefensor){
        const ataque = acaoAtacante.dano || 0;
        const defesa = acaoDefensor.defesa || 0;

        let danoFinal = ataque - defesa;

        if(danoFinal < 0){
            danoFinal = 0;
        }

        return danoFinal;
    }

    executarRound(acaoJogador, acaoAdversario){
        let log = `\n\n === ROUND ${this.round} ===\n`;
        /* Herói 1 ataca
        const dano1 = this.calcularDano(this.heroi1, this.heroi2);
        this.heroi2.vida -= dano1;

        log += `${this.heroi1.nome} atacou e causou ${dano1} de dano.\n`;

        //Verifica se o herói 2 morreu
        if(this.heroi2.vida <= 0){
            this.heroi2.vida = 0;
            log += `💀 ${this.heroi2.nome} foi derrotado!\n`;
            return log;
        }

         // Herói 2 ataca
        const dano2 = this.calcularDano(this.heroi2, this.heroi1);
        this.heroi1.vida -= dano2;

        log += `${this.heroi2.nome} atacou e causou ${dano2} de dano.\n`;

        //Verifica se o herói 1 morreu
        if(this.heroi1.vida <= 0){
            this.heroi1.vida = 0;
            log += `💀 ${this.heroi1.nome} foi derrotado!\n`;
            return log;
        }

        log += `❤️ ${this.heroi1.nome}: ${this.heroi1.vida} de vida.\n`;
        log += `❤️ ${this.heroi2.nome}: ${this.heroi2.vida} de vida.\n`;

        this.round++;

        return log;*/
        if(acaoJogador.erro){
            log += `⚠️ ${acaoJogador.mensagem}\n`;
            acaoJogador = this.heroiJogador.usarAtaqueComum();
            log += `Ação substituída por Ataque Comum.\n`;
        }

        if(acaoAdversario.erro){
            log += `⚠️ ${acaoAdversario.mensagem}\n`;
            acaoAdversario = this.heroiAdversario.usarAtaqueComum();
            log += `Ação do adversário substituída por Ataque Comum.\n`;
        }

        log+= `${acaoJogador.mensagem}\n`;
        log+= `${acaoAdversario.mensagem}\n`;

        const danoNoAdversario = this.calcularDano(acaoJogador, acaoAdversario);
        const danoNoJogador = this.calcularDano(acaoAdversario, acaoJogador);

        this.heroiAdversario.receberDano(danoNoAdversario);
        this.heroiJogador.receberDano(danoNoJogador);

        log+= `\nDano causado no adversário: ${danoNoAdversario}`;
        log+= `\nDano recebido pelo jogador: ${danoNoJogador}`;

        log+= `\n\n❤️ ${this.heroiJogador.nome}: ${this.heroiJogador.vida} vida | ${this.heroiJogador.stamina} stamina`;

        if(this.heroiJogador.mana !== undefined){
            log+= ` | ${this.heroiJogador.mana} mana`;
        }

        log+= ` | ${this.heroiJogador.nivel} XP`;

        log+= `\n\n❤️ ${this.heroiAdversario.nome}: ${this.heroiAdversario.vida} vida | ${this.heroiAdversario.stamina} stamina`;

        if(this.heroiAdversario.mana !== undefined){
            log+= ` | ${this.heroiAdversario.mana} mana`;
        }

        log+= ` | ${this.heroiAdversario.nivel} XP`;

        this.round++;

        return log;
        
    }

    verificarVencedor(){
        /*if(this.heroi1.vida <=0)return this.heroi2.nome;
        if(this.heroi2.vida <=0)return this.heroi1.nome;
        return null;*/
        if(this.heroiJogador.vida <= 0 && this.heroiAdversario.vida <=0){
            return "Empate";
        }

        if(this.heroiJogador.vida <=0){
            return this.heroiAdversario.nome;
        }

        if(this.heroiAdversario.vida <=0){
            return this.heroiJogador.nome;
        }

        return null;
    }
}