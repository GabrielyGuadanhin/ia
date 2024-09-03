const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a IA está influenciando a aréa da saúde?",
        alternativas: [
            {
                texto: "A IA está transformando o setor de saúde ao permitir diagnósticos mais rápidos e precisos. Além disso, sistemas de IA podem analisar grandes volumes de dados médicos para identificar padrões que podem escapar à observação humana",
                afirmacao: "Isso é maravilhoso!"
            },
            {
                texto: "A IA pode estar exacerbando a desigualdade no setor de saúde, uma vez que tecnologias avançadas podem ser acessíveis apenas para certos grupos. Além disso, a dependência de IA para diagnósticos pode levar a erros se os algoritmos não forem suficientemente treinados ou se houver problemas com os dados",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado:"O que você pensa sobre as assistentes virtuais?",
        alternativas: [
            {
                texto: "As assistentes virtuais baseadas em IA, como Siri e Alexa, têm facilitado a gestão de tarefas diárias e o acesso a informações. Elas são capazes de compreender e responder a comandos de voz, tornando a interação com a tecnologia mais intuitiva.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: " Assistentes virtuais podem comprometer a privacidade dos usuários ao coletar e armazenar dados pessoais. Além disso, há preocupações com a segurança, pois essas assistentes podem ser vulneráveis a ataques cibernéticos.",
                afirmacao: "Me preocupo com a IA"
            }
        ]
    },
    {
        enunciado: "Como a IA tem influenciado a indústria automotiva?",
        alternativas: [
            {
                texto: "Na indústria automotiva, a IA é utilizada para desenvolver veículos autônomos que prometem aumentar a segurança nas estradas. Esses veículos são equipados com sensores e algoritmos que permitem a navegação e a tomada de decisões em tempo real.",
                afirmacao: "Vem impulsionando a inovação na área com IA."
            },
            {
                texto: " Veículos autônomos podem enfrentar desafios significativos em termos de segurança e confiabilidade, especialmente em condições climáticas adversas. Há também preocupações sobre como a adoção desses veículos pode impactar o emprego em setores relacionados ao transporte.",
                afirmacao: "Me preocupo com segurança."
            }
        ]
    },
    {
        enunciado: "Como você acha que a IA está influenciando na internet?",
        alternativas: [
            {
                texto: "Sistemas de IA são cada vez mais usados em marketing para personalizar experiências do usuário e prever comportamentos de compra. Isso ajuda empresas a criar campanhas mais eficazes e direcionadas para seu público-alvo.",
                afirmação: "Ajuda muito os empreendores. "
            },
            {
                texto: "A personalização excessiva por IA pode resultar em invasão de privacidade e manipulação de comportamentos. Além disso, a dependência de algoritmos para estratégias de marketing pode levar a uma falta de diversidade nas ofertas e mensagens para os consumidores.",
                afirmacao: "Pode roubar meus dados."
            }
        ]
    },
    {
        enunciado: "Como você acha que está afetando a educação?",
        alternativas: [
            {
                texto: "A IA está revolucionando a educação com ferramentas que oferecem experiências de aprendizagem personalizadas. Esses sistemas podem adaptar o conteúdo e a metodologia de ensino com base nas necessidades e no progresso individual dos alunos.",
                afirmacao: "Ajuda no desenvolvimento."
            },
            {
                texto: "O uso de IA na educação pode levar à padronização excessiva, onde as soluções automatizadas não conseguem capturar a complexidade das necessidades educacionais individuais. Além disso, há o risco de que recursos sejam direcionados desproporcionalmente para tecnologias, em detrimento de métodos de ensino mais tradicionais e interativos.",
                afirmacao: "Causa risco as crianças."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
