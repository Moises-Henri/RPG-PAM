const listaHerois = document.getElementById("listaHerois");
const saida = document.getElementById("saida");

HeroiView.renderizarCards(heroisMock, listaHerois);

const botaoEscolher = document.querySelectorAll(".btnEscolherHeroi");

botaoEscolher.forEach((botao) =>{
    botao.addEventListener("click", () =>{
        const index = botao.dataset.index;
        const heroiSelecionado = heroisMock[index];

        HeroiView.exibirMensagem(
            saida,
            `Você escolheu o herói: ${heroiSelecionado.nome}
             Vida: ${heroiSelecionado.vida}
             Stamina: ${heroiSelecionado.stamina}
             Habilidade: ${heroiSelecionado.habilidade}
             Ouro: ${heroiSelecionado.ouro}
            `
        );
        console.log("Herói selecionado: ", heroiSelecionado);
    });
});