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
        return 1500;
    } else {
        return 1000;
    }
}

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantTotalCarnes = carneIndividual(duracao) * adultos + (carneIndividual(duracao) / 2 * criancas);
    let quantTotalCervejas = cervejaIndividual(duracao) * adultos;
    let quantTotalBebidas = bebidaIndividual(duracao) * adultos + (bebidaIndividual(duracao) / 2 * criancas);

    resultado.innerHTML =
        `<p>
            <img src="../assets/carne.svg">
            ${quantTotalCarnes / 1000} Kg de Carne
        </p>`;

    resultado.innerHTML +=
        `<p>
            <img src="../assets/cerveja.svg">
            ${Math.ceil(quantTotalCervejas / 355)} Latas de Cerveja (355 ml)
        </p>`;

    resultado.innerHTML +=
        `<p>
            <img src="../assets/bebida.svg">
            ${Math.ceil(quantTotalBebidas / 2000)} Garrafas de Bebidas (2 litros)
        </p>`;
}