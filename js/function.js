/**Botón para cambiar texto antes del pie de página */

document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click");
    document.getElementById("ultimoparrafo").innerHTML = "¡Saludos!"; 
}