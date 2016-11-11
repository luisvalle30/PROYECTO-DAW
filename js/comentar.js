function init() { 
	document.getElementById('btncomentar').onclick = function () { 
		crear_comentario(); 
		limpiar(); 
		//contar_comentarios(); 
	}
} 

function limpiar() { 
	document.getElementById("textnombre").value="";
	document.getElementById("textpais").value="";
	document.getElementById("selectbasic").value=""; 
	document.getElementById("textcontenido").value=""; 
} 

function crear_comentario() { 
	var contenedor = document.getElementById("Comentarios"); 
	var nombre = document.getElementById("textnombre").value;
	var pais = document.getElementById("textpais").value; 
	var tipo = document.getElementById("selectbasic").value; 
	var mensaje = document.getElementById("textcontenido").value; 

	if (nombre.length == 0){
		alert("El campo nombre esta vacio");
	}
	else if(validar_nombre(nombre) == false){
		alert("Escriba un nombre valido");
	}
	if (pais.length == 0){
		alert("El campo nombre esta vacio");
	}
	else if(validar_nombre(pais) == false){
		alert("Escriba un nombre de país valido");
	}
	else if(tipo.length == 0){
		alert("Elija el tipo de mensaje");
	}
	else if(mensaje.length == 0){
		alert("El campo mensaje esta vacio");
	}
	else{



		var f = new Date();
		var fecha=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(); 
		var comentario = document.createElement("div"); 
		comentario.setAttribute("class","panel panel-default"); 
		var panel = document.createElement("div"); 
		panel.setAttribute("class","panel-body"); 
		var contenidopanel = document.createTextNode(nombre); 
		var fnegrita = document.createElement("div"); 
		fnegrita.setAttribute("style","float: right;"); 

		/*var contenidopanel2 = document.createTextNode(pais); 
		var fnegrita2 = document.createElement("div"); 
		fnegrita2.setAttribute("style","float: right;"); */

		var verfecha = document.createTextNode(fecha); 
		fnegrita.appendChild(verfecha); 
		var ftipo = document.createElement("div"); 
		ftipo.setAttribute("style","float: inline-block; text-align:center;margin:-20px auto;"); 
		var vertipo = document.createTextNode(tipo); 
		ftipo.appendChild(vertipo); 
		panel.appendChild(contenidopanel); 
		panel.appendChild(fnegrita); 

		//panel.appendChild(fnegrita2);

		panel.appendChild(ftipo); 
		comentario.appendChild(panel); 

		//Ejercicio 1 

		var pane2 = document.createElement("div"); 
		pane2.setAttribute("class","panel-footer");
		var show=document.createTextNode(mensaje);
		comentario.appendChild(pane2);
		
		pane2.appendChild(show);

		//Ejercicio 2 

		document.getElementById("Comentarios").appendChild(comentario); 
	}
}

function validar_nombre(campo){
	var exp = new RegExp("^[a-zA-ZÑñÁÉÍÓÚáéíóú ]*$","g");
	return exp.test(campo);
}

function validar_campovacio(campo){
	var exp = new RegExp("^[a-zA-ZÑñÁÉÍÓÚáéíóú ]*$","g");
	return exp.test(campo);
}

window.onload = init;