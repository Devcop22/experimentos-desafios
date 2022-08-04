const dias = document.querySelector('.dias');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const temporizador = '20 Aug 2022';

const countdown = () => {
    const novaData = new Date(temporizador);
    const dataAtual = new Date();

    const total = (novaData - dataAtual) / 1000;

    const xdia = Math.floor(total / 3600 / 24);
    const xhor = Math.floor(total / 3600) % 24;
    const xmin = Math.floor(total / 60) % 60;
    const xsegs = Math.floor(total) % 60;

    dias.innerHTML = xdia;
    horas.innerHTML = formatTimer(xhor);
    minutos.innerHTML = formatTimer(xmin);
    segundos.innerHTML = formatTimer(xsegs);
};

const formatTimer = (time) => {
    return time < 10 ? `0${time}` : time
};

countdown();

setInterval(countdown, 1000)