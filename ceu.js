//estrelas
let ceu = document.getElementById("ceu")
let estrela1 = document.getElementById("estrela1")
let estrela2 = document.getElementById("estrela2")
let estrela3 = document.getElementById("estrela3")
let estrela4 = document.getElementById("estrela4")
let estrela5 = document.getElementById("estrela5")
let estrela6 = document.getElementById("estrela6")
let estrela7 = document.getElementById("estrela7")

//linhas

let linha1 = document.getElementById("linha1")
let linha2 = document.getElementById("linha2")
let linha3 = document.getElementById("linha3")
let linha4 = document.getElementById("linha4")
let linha5 = document.getElementById("linha5")
let linha6 = document.getElementById("linha6")
let linha7 = document.getElementById("linha7")


//musicas

let musica1 = new Audio ("Home.mp3")

let musica2 = new Audio ("Ludo.mp3")


musica2.volume = 0.1

musica1.volume = 0.5

musica1.loop = true

musica2.loop = true





for (let i = 1; i < 30; i++){
    let estrela = document.createElement("div")


    estrela.classList.add("estrelas-pequenas")


    estrela.style.top = Math.random()*100 + "%"

    estrela.style.left = Math.random() *100 + "%"

    estrela.style.animationDuration =
Math.random()*3 + 2 + "s"

    ceu.appendChild(estrela)
}


//iniciar
let conteudo = document.getElementById("conteudo")
function Iniciar(){

    musica1.play()

    conteudo.style.opacity = "0"
    conteudo.style.transitionDuration = "2s"

    setTimeout(function(){

        conteudo.innerHTML = `
        <h1 style="box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2)"> Departamento de Observaçao Intergalactica </h1>

        <p style="color:yellow">registro #07</p>
        
        <p>
        Dois seres desconhecidos foram detectados ha sete meses
        </p>
    `
        
        conteudo.style.opacity = "1"
    }, 3000);


    estrela1.classList.add("ativa")

}





function Arquivo01() {
    estrela1.classList.remove("ativa")

    conteudo.style.opacity = "0"

    setTimeout(function(){

        conteudo.innerHTML = `
        <h1>Arquivo #001</h1>
        
        <p>Primeiro contato estabelecido <br><br>
        
        A especie M apresentou compartamento "amigavel"<br>

        A especie A demontrou interesse incomum <br> <br>

        compatibilidade detectada
        
        </p> 
        `

        conteudo.style.opacity = "1"

    }, 1000)

    estrela2.classList.add("ativa")
    linha1.style.opacity = 1

}

function Arquivo02() {

    estrela2.classList.remove("ativa")

    estrela3.classList.add("ativa")

    conteudo.innerHTML = `
    <h1>Arquivo #002 </h1>

<p>
    Comunicação estabelecida. <br> <br>

Os dois espécimes desenvolveram uma linguagem
própria composta por brincadeiras, histórias
estranhas e teorias envolvendo alienígenas. <br> <br>

Pesquisadores ainda não compreenderam
como ambos conseguem se entender. <br> <br>

Classificação do fenômeno:

Curiosamente adorável. </p>
    `
    linha2.style.opacity = 1
}

function Arquivo03() {
    estrela3.classList.remove("ativa")
    estrela4.classList.add("ativa")

    conteudo.innerHTML = `
    <h1> Arquivo #003 </h1>

<p>
Durante as investigações, foi observado que
os espécimes M e A começaram a desenvolver
teorias e missões particulares. <br> <br>

Ambos passaram a agir como investigadores
de fenômenos desconhecidos e frequentemente
se identificavam como seres de origem não terrestre. <br> <br>

Os pesquisadores consideraram interromper
a análise, mas decidiram continuar por pura curiosidade. <br> <br>

Observação adicional:

Os dois parecem se divertir em qualquer galáxia. </p>` 
linha3.style.opacity = 1
}

function Arquivo04() {
    estrela4.classList.remove("ativa")
    estrela5.classList.add("ativa")

    conteudo.innerHTML = `
    <h1>ARQUIVO #004 </h1>
<p>
Evento de Classe Ω registrado. <br> <br>

Após um período prolongado de comunicação,
as entidades M e A realizaram o Ritual de
Sincronização Afetiva Mútua. <br> <br>

Desde então, ambas passaram a se reconhecer
oficialmente como companheiras de jornada. <br> <br>

Consequências observadas: <br>

• Aumento significativo na troca de carinho. <br>
• Frequência elevada de saudades. <br>
• Níveis perigosos de fofura. <br> <br>

Os cientistas ainda estudam o fenômeno.
</p>`
linha4.style.opacity = 1
}

function Arquivo05() {
    estrela5.classList.remove("ativa")
    estrela6.classList.add("ativa")

    conteudo.innerHTML = `
    <h1>ARQUIVO #005 </h1>
<p>
Registro raro identificado. <br> <br>

Os cientistas responsáveis pela pesquisa
ainda não conseguiram explicar como duas entidades
tão diferentes conseguiram desenvolver uma conexão
tão singular. <br> <br>

A probabilidade estatística desse encontro
era extremamente baixa. <br> <br>

No entanto... <br> <br>

Contra todas as previsões conhecidas,
os espécimes M e A continuaram escolhendo
permanecer lado a lado. <br> <br>

Observação dos pesquisadores:

Talvez o universo goste de criar coincidências. </p>`
linha5.style.opacity = 1
}

function Arquivo06(){
estrela6.classList.remove("ativa")
estrela7.classList.add("ativa")

conteudo.innerHTML = `
<h1>ARQUIVO #006 </h1>


<p>
Sete ciclos terrestres completos foram registrados. <br> <br>

Durante esse período, as entidades M e A
continuaram compartilhando transmissões diárias,
momentos felizes e incontáveis memórias. <br> <br>

Apesar do tempo decorrido,
nenhum sinal de enfraquecimento foi detectado. <br> <br>

Pelo contrário. <br> <br>

Os níveis de carinho, confiança e felicidade
permanecem em crescimento constante. <br> <br>

Os pesquisadores admitem: <br> <br>

O fenômeno observado superou todas as expectativas.

Preparando relatório final... </p>`
linha6.style.opacity = 1
}


function Arquivo07(){
    estrela7.classList.remove("ativa")

    conteudo.innerHTML = ` 


    

<h1>ARQUIVO #007</h1> <h2>RELATÓRIO FINAL</h2> <p> Departamento de Observação<br><br> Caso #07<br><br> Sete ciclos terrestres se passaram desde o primeiro sinal detectado.<br><br> Inúmeras análises foram realizadas.<br><br> Os cálculos foram refeitos inúmeras vezes.<br><br> Mas nenhuma explicação científica foi capaz de explicar completamente o fenômeno observado.<br><br> Mesmo diante das incontáveis possibilidades do universo, as entidades M e A continuaram escolhendo uma à outra.<br><br> Por esse motivo, o Caso #07 é oficialmente encerrado.<br><br> Classificação final:<br><br> Fenômeno extremamente raro.<br><br> Observação final dos pesquisadores:<br><br> Talvez algumas estrelas realmente estejam destinadas a se encontrar.<br><br> Fim da transmissão.<br><br> ...<br><br> Assinado:<br><br> Departamento de Observação Intergaláctica.<br><br> E por um garoto que te ama há seis meses. ❤️👽⭐<br><br> </p>


<button onclick="Arquivodeencerramento()">Registrar constelação</button>
`
   

}

function Arquivodeencerramento(){

    let linhas = [linha1, linha2, linha3, linha4, linha5, linha6]

    for(let linha of linhas){
    linha.style.opacity = "0"
}

  musica1.pause();
    musica1.currentTime = 0;

    musica2.currentTime = 0;

    musica2.play()
    .then(() => {
        console.log("musica2 tocando");
    })
    .catch(erro => {
        console.log("ERRO:", erro);
    });

    conteudo.style.opacity = "0"

    setTimeout(() => {
        
    }, 2000);

    conteudo.innerHTML = `
    <h2>Sinal final detectado...<h2>`

    conteudo.style.opacity = "1"

    setTimeout(() => {

        conteudo.innerHTML = `
        <h2>Constelação desconhecida registrada </h2>` 

    }, 6000)

    linha1.style.opacity = "1"

    setTimeout(() => {

        linha2.style.opacity = "1"
        estrela1.classList.add("ativa")
        estrela2.classList.add("ativa")
        
    }, 3000);

    setTimeout(() => {
        linha3.style.opacity = "1"
        estrela3.classList.add("ativa")
    }, 6000)

    setTimeout(() => {
        linha4.style.opacity = "1"
        estrela4.classList.add("ativa")
        
    }, 9000);

    setTimeout(() => {
        linha5.style.opacity = "1"
        estrela5.classList.add("ativa")
    },12000)

    setTimeout(() => {
        linha6.style.opacity = "1"
        estrela6.classList.add("ativa")
        
    }, 15000);

    setTimeout(() => {

        linha7.style.opacity = "1"
        estrela7.classList.add("ativa")
        
    }, 18000);

    setTimeout(() => {
        conteudo.style.opacity = "0"
        
    }, 21000);

setTimeout(() => {

    conteudo.style.opacity = "1"
    conteudo.innerHTML = `
    <h1>Constelação Destinada</h1> <br> <br> <br>

<p>
Registro oficialmente concluído.
</p>`
}, 25000);


setTimeout(() => {

    conteudo.style.opacity = "0"
    
}, 29000);

    setTimeout(() => {
        


        conteudo.style.opacity = "1"

        conteudo.innerHTML = ` 
<p>
Entre bilhões de estrelas no universo... <br> <br>

Eu ainda escolheria você. <br> <br> <br>

Feliz Dia dos Namorados. ❤️
</p>`
        
    }, 33000);



    setTimeout(() => {

        conteudo.style.opacity = "0"
        
    }, 38000);

}
