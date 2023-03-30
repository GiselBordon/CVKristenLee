/**Botón para cambiar texto antes del pie de página */

document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("ultimoparrafo").innerHTML = "¡Saludos!"; 
}

/**Título 2 cambia de color cuando mouse se mueve por encima */

const test = document.getElementById("titulo2");
test.addEventListener("mouseover", function (event) {
    event.target.style.color = "#ab1b68";
}, false); 