// Buena suerte ! Espero que se te encianda la "bombilla"!

const bulbHTML = document.querySelector("#bulb");

// bulbHTML.addEventListener('click', () => {
//     if (bulbHTML.className === 'bulb-off') {
//         bulbHTML.className = 'bulb-on';
//     } else {
//         bulbHTML.className = 'bulb-off'
//     }
// })

// bulbHTML.addEventListener('click', () => {
//     if (bulbHTML.classList.contains('bulb-off')) {
//         bulbHTML.classList.remove('bulb-off');
//         bulbHTML.classList.add('bulb-on');
//     } else {
//         bulbHTML.classList.remove('bulb-on');
//         bulbHTML.classList.add('bulb-off');
//     }
// })

// let bulbON = false;

// bulbHTML.addEventListener('click', () => {
//     if (bulbON) {
//         bulbON = false;
//         bulbHTML.classList.remove('bulb-on');
//     } else {
//         bulbON = true;
//         bulbHTML.classList.add('bulb-on');
//     }
// })

bulbHTML.addEventListener('click', () => {
    bulbHTML.classList.toggle('bulb-on');
})