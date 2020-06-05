const clock = document.getElementById('main-clock');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color');

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorText.innerHTML = `rgb(${red}, ${green}, ${blue})`;
}, 1000)