function validateForm() {
	var spanes = document.getElementsByTagName("span");
	for (var i = 0; i < spanes.length; i++) {
		spanes[i].parentNode.removeChild(spanes[i]);
	}
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var emilio = document.getElementById("input-email");
	var contra = document.getElementById("input-password");
	var seleccion = document.getElementsByTagName("select")[0];
	var regexEmilio = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var regexNombreApellido = /^[ÑA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
	var err = true;
	var spane = document.createElement("span");
	if (nombre.value == null || nombre.value == "" || !regexNombreApellido.test(nombre.value)) 	{
		spane.innerHTML="Debe contener solo letras, primera letra mayúscula";
		nombre.parentNode.appendChild(spane);
		err = false;		
	}
	else if (apellido.value == null || apellido.value == "" || !regexNombreApellido.test(apellido.value)) {	
		spane.innerHTML = "Ingresa apellido, solo letras, primera letra mayúscula";
		apellido.parentNode.appendChild(spane);
		err = false;
	}
	else if (emilio.value == null || emilio.value == "" || !regexEmilio.test(emilio.value)) {
		spane.innerHTML = "Ingresa un correo electrónico válido"
		emilio.parentNode.appendChild(spane);
		err = false;
	}
	else if (contra.value == null || contra.value == "" || contra.value.length < 6) {
		spane.innerHTML = "Ingresa una contraseña con 6 caracteres o más";
		contra.parentNode.appendChild(spane);
		err = false;
	}
	else if (contra.value == "password" || contra.value == 123456 || contra.value == 098754) {
		spane.innerHTML = "Ingresa otra contraseña por favor";
		contra.parentNode.appendChild(spane);
		err = false;
	}
	else if (seleccion.value == "0" || seleccion.value == null) {
		spane.innerHTML = "¡Escoge un tipo de Bici Loca!";
		seleccion.parentNode.appendChild(spane);
		err = false;
	}
	return err;
};

//VER que seleccion value es comparable con "0", no con 0


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