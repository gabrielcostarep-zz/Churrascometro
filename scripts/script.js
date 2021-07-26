let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function carneIndividual(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaIndividual(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaIndividual(duracao) {
    if (duracao >= 6) {
        return 2300;
    } else {
        return 1500;
    }
}

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantTotalCarnes = carneIndividual(duracao) * adultos + (carneIndividual(duracao) / 2 * criancas);
    let quantTotalCervejas = cervejaIndividual(duracao) * adultos;
    let quantTotalBebidas = bebidaIndividual(duracao) * adultos + (bebidaIndividual(duracao) / 2 * criancas);


    quantTotalCarnes / 1000 >= 1 ?
        resultado.innerHTML = `<p>🥩 ${quantTotalCarnes / 1000} Kg de carne</p>` : resultado.innerHTML = `<p>🥩 ${quantTotalCarnes}g de Carne</p>`

    resultado.innerHTML += `<p>🍺 ${Math.ceil(quantTotalCervejas / 355)} latas de cerveja (355ml)</p>`

    resultado.innerHTML += `<p>🥤 ${Math.ceil(quantTotalBebidas / 2000)} Garrafas de Bebidas (2 litros)</p>`
}