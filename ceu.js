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
// MÚSICAS E EFEITOS
// =====================================

const musica1 = new Audio("Nostagia.mp3");
const musica2 = new Audio("Coldplay.mp3");
const somTransicao = new Audio("Ludo.mp3");

musica1.volume = 0.5;
musica2.volume = 0.1;
somTransicao.volume = 0.5;

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

function fadeOut(){
    conteudo.style.opacity = "0";
}

function fadeIn(){
    conteudo.style.opacity = "1";
}

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

function tocarSomTransicao(){
    // Reseta o áudio para o início caso ele já esteja tocando, evitando duplicar ou dar eco
    somTransicao.currentTime = 0;
    somTransicao.play().catch(e => console.log("Áudio bloqueado pelo navegador antes da interação."));
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
    tocarSomTransicao();
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
    tocarSomTransicao();
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
    tocarSomTransicao();
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
    tocarSomTransicao();
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
    tocarSomTransicao();
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
    tocarSomTransicao();
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

        But nenhuma explicação científica foi capaz de explicar completamente o fenômeno observado.

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
    }, 10000);


    // Constelação desconhecida
    setTimeout(() => {
        trocarTexto(`
        <h2>Constelação desconhecida registrada...</h2>
        `);
    }, 15000);


    setTimeout(() => {
        mostrarLinha(1);
        ativarEstrela(2);
        trocarTexto(`<h2>Analisando sinais...</h2>`)
    }, 20000);


    setTimeout(() => {
        mostrarLinha(2);
        ativarEstrela(3);
    }, 23000);


    setTimeout(() => {
        mostrarLinha(3);
        ativarEstrela(4);
    }, 26000);


    setTimeout(() => {
        mostrarLinha(4);
        ativarEstrela(5);
    }, 30000);


    setTimeout(() => {
        mostrarLinha(5);
        mostrarLinha(6);
        ativarEstrela(6);
    }, 35000);


    // Céu muda de cor
    setTimeout(() => {
        document.body.style.background =
        "radial-gradient(circle at center, #1e3a8a, #030712)";
    }, 35000);


    // Todas piscando
    setTimeout(() => {
        estrelas.forEach(estrela => {
            estrela.classList.add("ativa");
        });
    }, 38000);


    // Efeito especial final
    setTimeout(() => {
        estrelas.forEach(estrela => {
            estrela.classList.add("final");
        });
    }, 41000);


    // Constelação Destinada
    setTimeout(() => {
        trocarTexto(`
        <h1>Constelação Destinada</h1>
        <p>
        Registro oficialmente concluído.
        </p>
        `);
    }, 42000);


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
    }, 50000);


    // Carrossel de fotos e vídeo
    setTimeout(() => {
        trocarTexto(`
            <div style="width: 100%; max-width: 300px; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
                <h2 style="font-size: 1.3rem; margin: 0 0 10px 0; height: 30px; line-height: 30px; text-shadow: 0 0 10px rgba(255,255,255,0.5);">Nossas Memórias ✨</h2>
                <div class="slideshow-interno">
                    <img src="foto1.jpeg" alt="foto1" class="midia-memoria ativa">
                    <img src="foto0.jpeg" alt="foto2" class="midia-memoria">
                    <img src="foto3.jpeg" alt="foto3" class="midia-memoria">
                    <img src="foto4.jpeg" alt="foto4" class="midia-memoria">
                    <img src="foto5.jpeg" alt="foto5" class="midia-memoria">
                    <video src="Especial.mp4" class="midia-memoria" style="object-fit: contain !important; animation: none !important; transform: none !important; transition: none !important;" playsinline></video>
                </div>
            </div>
        `);

        setTimeout(iniciarSlideshowInterno, 1200);
        musica2.volume = 0.65;
    }, 60000);

    // O site apaga completamente bem depois (120 segundos) para dar tempo de ver tudo
    setTimeout(() => {
        conteudo.style.opacity = "0"
    }, 120000);

}


// =====================================
// FUNÇÕES DO CARROSSEL E LINHAS
// =====================================

function iniciarSlideshowInterno() {
    const midias = document.querySelectorAll('.midia-memoria');
    if (midias.length === 0) return;
    
    let indiceAtual = 0;
    let intervalo = setInterval(proximaMidia, 3500);

    function proximaMidia() {
        midias[indiceAtual].classList.remove('ativa');
        
        if (midias[indiceAtual].tagName === 'VIDEO') {
            midias[indiceAtual].pause();
        }

        indiceAtual = (indiceAtual + 1) % midias.length;
        midias[indiceAtual].classList.add('ativa');

        if (midias[indiceAtual].tagName === 'VIDEO') {
            clearInterval(intervalo);
            musica2.volume = 0.05; 
            
            midias[indiceAtual].muted = true;
            midias[indiceAtual].currentTime = 0;
            
            midias[indiceAtual].play().then(() => {
                midias[indiceAtual].muted = false;
                midias[indiceAtual].volume = 1.0; 
            }).catch(error => {
                console.log("Erro ao tentar rodar o vídeo: ", error);
            });

            midias[indiceAtual].onended = function() {
                musica2.volume = 0.65; 
                midias[indiceAtual].classList.remove('ativa');
                indiceAtual = 0;
                midias[indiceAtual].classList.add('ativa');
                intervalo = setInterval(proximaMidia, 3500);
            };
        }
    }
}

function ajustarLinha(idLinha, idEstrelaA, idEstrelaB) {
    const linha = document.getElementById(idLinha);
    const estA = document.getElementById(idEstrelaA).getBoundingClientRect();
    const estB = document.getElementById(idEstrelaB).getBoundingClientRect();

    const x1 = estA.left + estA.width / 2;
    const y1 = estA.top + estA.height / 2;
    const x2 = estB.left + estB.width / 2;
    const y2 = estB.top + estB.height / 2;

    linha.setAttribute('x1', x1);
    linha.setAttribute('y1', y1);
    linha.setAttribute('x2', x2);
    linha.setAttribute('y2', y2);
}

function atualizarTodasAsLinhas() {
    ajustarLinha('linha1', 'estrela1', 'estrela2'); 
    ajustarLinha('linha2', 'estrela1', 'estrela3'); 
    ajustarLinha('linha3', 'estrela2', 'estrela4'); 
    ajustarLinha('linha4', 'estrela3', 'estrela5'); 
    ajustarLinha('linha5', 'estrela4', 'estrela6'); 
    ajustarLinha('linha6', 'estrela5', 'estrela7'); 
    ajustarLinha('linha7', 'estrela6', 'estrela7'); 
}

window.addEventListener('load', atualizarTodasAsLinhas);
window.addEventListener('resize', atualizarTodasAsLinhas);