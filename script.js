function NumeroAleatorio() {
    return Math.floor(Math.random() * 4);
}

const colores = ["rojo", "amarillo", "verde", "azul"];

function girarRuleta() {
    const indiceColor = NumeroAleatorio();
    return colores[indiceColor];
}

function actualizarFlecha(colorElegido) {
    const ruleta = document.querySelector('.ruleta');
    const colores = ruleta.getElementsByClassName('color');

    for (let i = 0; i < colores.length; i++) {
        if (colores[i].classList.contains(colorElegido)) {
            const flecha = document.getElementById('flecha');
            const colorSeleccionado = colores[i];

            const flechaLeft = colorSeleccionado.offsetLeft + colorSeleccionado.offsetWidth / 2 - 7.5; // Mitad del ancho de la flecha
            const flechaTop = colorSeleccionado.offsetTop + colorSeleccionado.offsetHeight;

            flecha.style.borderTopColor = colorElegido;
            flecha.style.left = `${flechaLeft}px`;
            flecha.style.top = `${flechaTop}px`;
            return;
        }
    }
}

const botonGirar = document.getElementById("botonGirar");
const resultado = document.getElementById("resultado");

botonGirar.addEventListener("click", function() {
    const colorElegido = girarRuleta();
    resultado.textContent = `Color: ${colorElegido}`;
    actualizarFlecha(colorElegido);

    switch (colorElegido) {
        case 'rojo':
            console.log("Rojo");
            break;
        case 'azul':
            console.log("Azul");
            break;
        case 'amarillo':
            console.log("Amarillo");
            break;
        case 'verde':
            console.log("Verde");
            break;
        default:
            console.log("Error");
    }
});
