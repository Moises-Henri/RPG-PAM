const saidaHeroi = document.getElementById("saidaHeroi");

const saidaEquipamentos = document.getElementById("saidaEquipamentos");

const saidaComparacao = document.getElementById("saidaComparacao");

const saida = document.getElementById("saida");

const heroiSalvo = localStorage.getItem("heroiSelecionado");
const equipamentosSalvos = localStorage.getItem("equipamentosSelecionados");

if (!heroiSalvo || !equipamentosSalvos) {
    exibirErro("Dados incompletos. Volte e realize as seleções.");
} else {
    prepararHeroiParaBatalha();
}

function prepararHeroiParaBatalha() {
    const dadosHeroiSalvo = JSON.parse(heroiSalvo);
    const indicesEquipamentos = JSON.parse(equipamentosSalvos);

    const heroi = heroiMock.find(
        (item) => item.nome === dadosHeroiSalvo.nome
    );

    if(!heroi) {
        exibirErro("Não foi possível reconstruir o herói.");
        return;
    }

    const atributosBasicos = {
        vida: heroi.vida,
        poderAtaque: heroi.poderAtaque,
        poderDefesa: heroi.poderDefesa
    };

    const armaSelecionada = 
        equipamentosMock[
            indicesEquipamentos.armaIndex
        ];
    
    const armaduraSelecionada = 
        equipamentosMock[
            indicesEquipamentos.armaduraIndex
        ];

    const pocaoSelecionada =
        equipamentosMock[
            indicesEquipamentos.pocaoIndex
        ];

    if(!(armaSelecionada instanceof Arma)) {
        exibirErro("A arma selecionada não foi encontrada");
        return;
    }

    if(!(armaduraSelecionada instanceof Armadura)) {
        exibirErro("A armadura selecionada não foi encontrada");
        return;
    }

    if(!(pocaoSelecionada instanceof Pocao)) {
        exibirErro("A poção selecionada não foi encontrada");
        return;
    }

    const equipamentosSelecionados = {
        arma: armaSelecionada,
        armadura: armaduraSelecionada,
        pocao: pocaoSelecionada
    };

    const listaEquipamentos = [
        armaSelecionada,
        armaduraSelecionada,
        pocaoSelecionada
    ];

    listaEquipamentos.forEach((equipamento) => {
        heroi.equipar(equipamento);
    });

    const heroiPreparado = {
        nome: heroi.nome,
        raca: heroi.raca,
        vida: heroi.vida,
        vidaMaxima: heroi.vidaMaxima,
        stamina: heroi.stamina,
        nivel: heroi.nivel,
        poderAtaque: heroi.poderAtaque,
        poderDefesa: heroi.poderDefesa,
        habilidade: heroi.habilidade,
        mana: heroi.mana ?? null,
        equipamentos: heroi.equipamentos.map((equipamento) => ({
                        nome: equipamento.nome,
                        tipo: equipamento.constructor.tipo,
                        habilidade: equipamento.habilidade
                    }))
    };

    localStorage.setItem(
        "heroiPreparado",
        JSON.stringify(heroiPreparado)
    )

    EquipamentoView.exibirHeroi(
        saidaHeroi,
        heroi
    );

    EquipamentoView.exibirEquipamentosSelecionados(
        saidaEquipamentos,
        equipamentosSelecionados
    );

    saida.textContent = 
        "Preparação concluída com sucesso. \n\n" +
        `Herói: ${heroi.nome}\n` +
        `Ataque final: ${heroi.poderAtaque} \n` +
        `Defesa final: ${heroi.poderDefesa} \n` +
        `Vida final: ${heroi.vida} \n\n` +
        "O herói preparado foi salvo na chave:\n" + "heroiPreparado";

    console.log(
        "Objeto salvo no localStorage", dadosHeroiSalvo
    );

    console.log("Instância reconstruída", heroi);

    console.log("Arma é instância de Arma?", armaSelecionada instanceof Arma);
    console.log("Armadura é instância de Armadura?", armaduraSelecionada instanceof Armadura);
    console.log("Poção é instância de Poção?", pocaoSelecionada instanceof Pocao);

    console.log("Atributos básicos", atributosBasicos);

    console.log("Herói preparado", heroiPreparado);

    function exibirErro(mensagem) {
        saidaHeroi.textContent = mensagem;
        saidaEquipamentos.textContent = "Não foi possível recuperar equipamentos.";
        saidaComparacao.textContent = "Não foi possível comparar os atributos.";
        saida.textContent = "A preparação da batalha foi interrompida.";
        console.error(mensagem);
    }

}