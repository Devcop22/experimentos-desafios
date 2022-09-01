const data = '29 Aug 2024';

const countDown = setInterval(function () {
    const dataAlvo = new Date(data);
    const dataAtual = new Date();
    const temporizador = (dataAlvo - dataAtual) / 1000;

    const dias = Math.floor(temporizador / 3600 / 24);
    const horas = Math.floor(temporizador / 3600) % 24;
    const minutos = Math.floor(temporizador / 60) % 60;
    const segundos = Math.floor(temporizador) % 60;

    document.querySelector('.dias').innerHTML = formatTimer(dias);
    document.querySelector('.horas').innerHTML = formatTimer(horas);
    document.querySelector('.minutos').innerHTML = formatTimer(minutos);
    document.querySelector('.segundos').innerHTML = formatTimer(segundos);

    if (temporizador <= 0) {
        document.querySelector(".countdown-display").innerHTML = "O foguete entrou em órbita!"
    }
}, 1000);

const formatTimer = (time) => {
    return time < 10 ? `0${time}` : time
};