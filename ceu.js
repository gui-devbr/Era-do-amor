
// =====================================
// ESTRELAS PRINCIPAIS
// =====================================

const ceu = document.getElementById("ceu");
const conteudo = document.getElementById("conteudo");

const estrelas = [
    document.getElementById("estrela1"),
    document.getElementById("estrela2"),
    document.getElementById("estrela3"),
    document.getElementById("estrela4"),
    document.getElementById("estrela5"),
    document.getElementById("estrela6"),
    document.getElementById("estrela7")
];

// =====================================
// LINHAS
// =====================================

const linhas = [
    document.getElementById("linha1"),
    document.getElementById("linha2"),
    document.getElementById("linha3"),
    document.getElementById("linha4"),
    document.getElementById("linha5"),
    document.getElementById("linha6"),
    document.getElementById("linha7")
];

// =====================================
// MÚSICAS
// =====================================

const musica1 = new Audio("Home.mp3");
const musica2 = new Audio("Ludo.mp3");

musica1.volume = 0.5;
musica2.volume = 0.1;

musica1.loop = true;
musica2.loop = true;


// =====================================
// ESTRELAS DE FUNDO
// =====================================

for(let i = 0; i < 40; i++){

    let estrela = document.createElement("div");

    estrela.classList.add("estrelas-pequenas");

    estrela.style.top = Math.random()*100 + "%";

    estrela.style.left = Math.random()*100 + "%";

    estrela.style.animationDuration =
        Math.random()*3 + 2 + "s";

    ceu.appendChild(estrela);
}


// =====================================
// FUNÇÕES AUXILIARES
// =====================================

function trocarTexto(html){

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = html;

        fadeIn();

    },1000);

}

function ativarEstrela(numero){

    estrelas[numero].classList.add("ativa");

}

function desativarEstrela(numero){

    estrelas[numero].classList.remove("ativa");

}

function mostrarLinha(numero){

    linhas[numero].style.opacity = "1";

}

function esconderLinhas(){

    linhas.forEach(linha => {

        linha.style.opacity = "0";

    });

}

function apagarEstrelas(){

    estrelas.forEach(estrela => {

        estrela.classList.remove("ativa");

    });

}


// =====================================
// INICIAR
// =====================================

function Iniciar(){

    musica1.play();

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>
            Departamento de Observação Intergaláctica
        </h1>

        <p style="color:yellow">
            Registro #07
        </p>

        <p>
            Dois seres desconhecidos foram detectados há sete meses.
        </p>

        `;

        fadeIn();

    },2000);


    ativarEstrela(0);
}


// =====================================
// ARQUIVO #001
// =====================================

function Arquivo01(){

    desativarEstrela(0);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #001</h1>

        <p>

        Primeiro contato estabelecido.

        <br><br>

        A espécie M apresentou comportamento amigável.

        <br><br>

        A espécie A demonstrou interesse incomum.

        <br><br>

        Compatibilidade detectada.

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(0);

    ativarEstrela(1);

}


// =====================================
// ARQUIVO #002
// =====================================

function Arquivo02(){

    desativarEstrela(1);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #002</h1>

        <p>

        Comunicação estabelecida.

        <br><br>

        Os dois espécimes desenvolveram uma linguagem própria
        composta por brincadeiras, histórias estranhas
        e teorias envolvendo alienígenas.

        <br><br>

        Pesquisadores ainda não compreenderam como
        ambos conseguem se entender.

        <br><br>

        Classificação do fenômeno:

        <br><br>

        Curiosamente adorável.

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(1);

    ativarEstrela(2);

}


// =====================================
// ARQUIVO #003
// =====================================

function Arquivo03(){

    desativarEstrela(2);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #003</h1>

        <p>

        Durante as investigações, foi observado que
        os espécimes M e A começaram a desenvolver
        teorias e missões particulares.

        <br><br>

        Ambos passaram a agir como investigadores
        de fenômenos desconhecidos e frequentemente
        se identificavam como seres de origem não terrestre.

        <br><br>

        Os pesquisadores decidiram continuar a análise
        por pura curiosidade.

        <br><br>

        Observação adicional:

        <br><br>

        Os dois parecem se divertir em qualquer galáxia.

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(2);

    ativarEstrela(3);

}


// =====================================
// ARQUIVO #004
// =====================================

function Arquivo04(){

    desativarEstrela(3);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #004</h1>

        <p>

        Evento de Classe Ω registrado.

        <br><br>

        Após um período prolongado de comunicação,
        as entidades M e A realizaram o Ritual de
        Sincronização Afetiva Mútua.

        <br><br>

        Desde então, ambas passaram a se reconhecer
        oficialmente como companheiras de jornada.

        <br><br>

        Consequências observadas:

        <br><br>

        • Aumento significativo na troca de carinho.

        <br>

        • Frequência elevada de saudades.

        <br>

        • Níveis perigosos de fofura.

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(3);

    ativarEstrela(4);

}


// =====================================
// ARQUIVO #005
// =====================================

function Arquivo05(){

    desativarEstrela(4);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #005</h1>

        <p>

        Registro raro identificado.

        <br><br>

        Os cientistas responsáveis pela pesquisa
        ainda não conseguiram explicar como duas entidades
        tão diferentes conseguiram desenvolver
        uma conexão tão singular.

        <br><br>

        A probabilidade estatística desse encontro
        era extremamente baixa.

        <br><br>

        No entanto...

        <br><br>

        Contra todas as previsões conhecidas,
        os espécimes M e A continuaram escolhendo
        permanecer lado a lado.

        <br><br>

        Talvez o universo goste de criar coincidências.

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(4);

    ativarEstrela(5);

}


// =====================================
// ARQUIVO #006
// =====================================

function Arquivo06(){

    desativarEstrela(5);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>Arquivo #006</h1>

        <p>

        Sete ciclos terrestres completos foram registrados.

        <br><br>

        Durante esse período, as entidades M e A
        continuaram compartilhando transmissões diárias,
        momentos felizes e incontáveis memórias.

        <br><br>

        Nenhum sinal de enfraquecimento foi detectado.

        <br><br>

        Pelo contrário.

        <br><br>

        Os níveis de carinho, confiança e felicidade
        permanecem em crescimento constante.

        <br><br>

        Preparando relatório final...

        </p>

        `;

        fadeIn();

    },1000);

    mostrarLinha(5);

    ativarEstrela(6);

}



// =====================================
// ARQUIVO #007
// =====================================

function Arquivo07(){

    desativarEstrela(6);

    fadeOut();

    setTimeout(() => {

        conteudo.innerHTML = `

        <h1>ARQUIVO #007</h1>

        <h2>RELATÓRIO FINAL</h2>

        <p>

        Sete ciclos terrestres se passaram desde o primeiro sinal detectado.

        <br><br>

        Inúmeras análises foram realizadas.

        <br><br>

        Os cálculos foram refeitos inúmeras vezes.

        <br><br>

        Mas nenhuma explicação científica foi capaz de explicar completamente o fenômeno observado.

        <br><br>

        Mesmo diante das incontáveis possibilidades do universo,
        as entidades M e A continuaram escolhendo uma à outra.

        <br><br>

        Classificação final:

        <br><br>

        Fenômeno extremamente raro.

        <br><br>

        Talvez algumas estrelas realmente estejam destinadas a se encontrar.

        </p>

        <button onclick="Arquivodeencerramento()">

        Registrar Constelação

        </button>

        `;

        fadeIn();

    },1000);

}


// =====================================
// ENCERRAMENTO
// =====================================

function Arquivodeencerramento() {

    esconderLinhas();
    apagarEstrelas();

    musica1.pause();
    musica1.currentTime = 0;

    musica2.currentTime = 0;
    musica2.play();

    // Sinal final
    setTimeout(() => {

        trocarTexto(`
        <h2>Sinal final detectado...</h2>
        `);

    }, 2000);


    // Montando constelação
    setTimeout(() => {

        mostrarLinha(0);

        ativarEstrela(0);
        ativarEstrela(1);

    }, 3000);


    // Constelação desconhecida
    setTimeout(() => {

        trocarTexto(`
        <h2>Constelação desconhecida registrada...</h2>
        `);

    }, 6000);


    setTimeout(() => {

        mostrarLinha(1);
        ativarEstrela(2);
conteudo.innerHTML `
        <h2>Analisando sinais...</h2>`

    }, 6000);


    setTimeout(() => {

        mostrarLinha(2);
        ativarEstrela(3);

    }, 9000);


    setTimeout(() => {

        mostrarLinha(3);
        ativarEstrela(4);

    }, 12000);


    setTimeout(() => {

        mostrarLinha(4);
        ativarEstrela(5);

    }, 15000);


    setTimeout(() => {

        mostrarLinha(5);
        mostrarLinha(6);

        ativarEstrela(6);

    }, 18000);


    // Céu muda de cor
    setTimeout(() => {

        document.body.style.background =
        "radial-gradient(circle at center, #1e3a8a, #030712)";

    }, 18000);


    // Todas piscando
    setTimeout(() => {

        estrelas.forEach(estrela => {

            estrela.classList.add("ativa");

        });

    }, 19000);


    // Efeito especial final
    setTimeout(() => {

        estrelas.forEach(estrela => {

            estrela.classList.add("final");

        });

    }, 20000);


    // Constelação Destinada
    setTimeout(() => {

        trocarTexto(`

        <h1>Constelação Destinada</h1>

        <p>
        Registro oficialmente concluído.
        </p>

        `);

    }, 24000);


    // Mensagem final
    setTimeout(() => {

        trocarTexto(`

        <h1>❤️</h1>

        <p>

        Entre bilhões de estrelas no universo...

        <br><br>

        Eu ainda escolheria você.

        <br><br><br>

        Feliz Dia dos Namorados.

        </p>

        `);

    }, 31000);


    // Fade final
    setTimeout(() => {

        conteudo.style.opacity = "0";

        musica2.volume = 0.65;

    }, 40000);

}