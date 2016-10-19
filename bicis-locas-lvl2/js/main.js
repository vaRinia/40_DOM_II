/*
function validateForm() {
	var nombre = document.getElementById("name").value;
	if (nombre == "" || nombre == null) {
		var hermano = document.getElementById("name");
		var texto = document.createTextNode("Escriba usuario");
		mensaje(hermano,texto);
	} else if 
}


function mensaje (hermano,texto) {
	var mensajeNegro = document.createElement("span");
	var padreMensaje = hermano.parentNode;
	padreMensaje.insertBefore(mensajeNegro,hermano);
	mensajeNegro.appendChild(texto);
	return mensajeNegro;
}

*/

/* NO LO USAREMOS AQUI, PERO PUEDE SERRR
var boxes = document.getElementsByClassName("input-box");
for (var i = 0; i < boxes.length; i++) {
	var span = document.createElement("span");
	boxes[i].appendChild(span);
};
*/



var nombre = document.getElementById("name"); //no necesitamos el string, sino el elemento
if (nombre.value == "" || nombre.value == null) {
	var span = document.createElement("span");
	var texttoNombre = document.createTextNode("Llena este campo");
	span.innerHTML = "Llena este campo"
}


//esto se hace al inicio de la función de validar, para que borre los mensajes 
var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.lenght; i++) {
	spans[i].parentNode.removeChild(spans[i]);
}
