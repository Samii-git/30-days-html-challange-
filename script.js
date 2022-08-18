// Don't touch this file

const cardsArray = document.querySelectorAll('.card')

// cardsArray.map((card) => {
//     card.style.background = 'red'
// })

let hexString = "0123456789abcdef";

let randomColor = () => {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}

const generateGrad = () => {
    let colorOne = randomColor();
    let colorTwo = randomColor();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
}

 [...cardsArray].map(card => {
    card.style.background = generateGrad()
})
