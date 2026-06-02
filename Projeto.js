let tempot = new Date()
tempot.setDate(tempot.getDate() + 11);

function atualizartempo(){

let now = new Date ().getTime()
let futuro = tempot.getTime()

let distance = futuro - now


let days = Math.floor(distance / (1000 * 60 * 60 *24)) //quanto dias cabem

let hours = Math.floor(distance %(1000 * 60 * 60 * 24) / (1000 * 60 * 60)) //quantos horas cabem


let minutos = Math.floor(distance %(1000* 60 * 60) / (1000 * 60))

let segundos = Math.floor(distance %(1000 * 60) / 1000)


document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutos;
document.getElementById("seconds").textContent = segundos;
}

setInterval(atualizartempo, 1000);
atualizartempo()