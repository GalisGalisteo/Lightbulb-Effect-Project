// Buena suerte ! Espero que se te encianda la "bombilla"!

const bulbHTML = document.querySelector("#bulb");

// bulbHTML.addEventListener('click', () => {
//     if (bulbHTML.className === 'bulb-off') {
//         bulbHTML.className = 'bulb-on';
//     } else {
//         bulbHTML.className = 'bulb-off'
//     }
// })

bulbHTML.addEventListener('click', () => {
    bulbHTML.classList.toggle('bulb-on');
})