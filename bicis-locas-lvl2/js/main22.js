function validateForm() 
{
var nombre = document.getElementById("name");
var apellido = document.getElementById("lastname");
var emilio = document.getElementById("input-email");
var contra = document.getElementById("input-password");
var seleccion = document.getElementsByTagName("select")[0].selectedIndex;
var regexEmilio = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regexNombreApellido = /^[ÑA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
var err = true;

	if (nombre.value == null || nombre.value == "" || !regexNombreApellido.test(nombre.value)) 	{
		var spane = document.createElement("span");
		spane.innerHTML="Ingresa nombre, debe contener solo letras, primera letra mayúscula";
		nombre.parentNode.appendChild(spane);
		err = false;

	}
	if (appellido.value == null || apellido.value == "" || !regexNombreApellido.test(apellido.value)) {
		var spane = document.createElement("span");
		spane.innerHTML = "Ingresa apellido, solo letras, primera letra mayúscula";
		apellido.parentNode.appendChild(spane);
	}
	if (emilio.value == null || emilio.value == "" || !regexEmilio(emilio.value)) {

	}

	return err;
};

/*

<span>jlkjlkjlkjljlkjl</span>

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



/* NO LO USAREMOS AQUI, PERO PUEDE SERRR
var boxes = document.getElementsByClassName("input-box");
for (var i = 0; i < boxes.length; i++) {
	var span = document.createElement("span");
	boxes[i].appendChild(span);
};
*/


/*
var nombre = document.getElementById("name"); //no necesitamos el string, sino el elemento
if (nombre.value == "" || nombre.value == null) {
	var span = document.createElement("span");
	var texttoNombre = document.createTextNode("Llena este campo");
	span.innerHTML = 	
}


//esto se hace al inicio de la función de validar, para que borre los mensajes 
var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.lenght; i++) {
	spans[i].parentNode.removeChild(spans[i]);
}
*/