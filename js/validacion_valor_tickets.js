	const valorTicket = 200;

//Obtención del contenido de las etiquetas a utilizar

//Variables destinadas a los datos del usuario
let nombre = document.getElementById("tickets__name");
let apellido = document.getElementById("tickets__lastName");
let email = document.getElementById("tickets__email");
let cantidad = document.getElementById("tickets__amount");
let categoria = document.getElementById("tickets__category");

//Variables destinadas a la interacción con los botones del formulario
let borrar = document.getElementById("clean__button");
let resumen = document.getElementById("resumen__button");


//Eliminamos posibles etiquetas de "is-invalid" previamente cargadas por
//la interacción del usuario con el formulario de la página

const limpiarAdvertenciaCampoVacio = () =>{

	let etiquetas = document.querySelectorAll(".form-control, .form-select");

	for(let etiqueta of etiquetas){
		etiqueta.classList.remove('is-invalid');
	};

	return etiquetas;
};

const advertenciaCampoVacio = () =>{
	//La variable campoVacio almacenará (de existir) la etiqueta del input que se encuentra vacío. De no existir alguno, almacenará un boolean false.

	let campoVacio = checkCamposVacios();
	
	if(campoVacio !== 0){
		campoVacio.classList.add('is-invalid');
	return true //
		
		}else return false

};


//Función para verificación de campos vacíos
//De existir algún campo vacío, la función retornará dicho campo
//Qué al volver a la función anterior invocará a "advertenciaCampoVacio" para
//indicarle al usuario que debe llenar el campo señalado
const checkCamposVacios = () =>{

	if(nombre.value == ""){
	nombre.focus()
	return nombre
	}
	if(apellido.value == ""){
	apellido.focus()
	return apellido
	}
	if(!emailValido(email.value)){
	email.focus()
	return email
	}
	//Por el tipo de input utilizado, es posible que se ingresen valores distintos a números, entonces se hace la validación de ambas posibilidades
	if(cantidad.value == "" || isNaN(cantidad.value)){

	return cantidad
	}

	return 0
};

	//validez del correo ingresado
const emailValido = mail =>{
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

const calculoCategorias = (cantidad) =>{

			//0 corresponde a sin categoría
			if(categoria.value == 0){
				return valorTicket*cantidad;
			}
			//1 corresponde a categoria estudiante
			if(categoria.value == 1){
				return ((valorTicket - (valorTicket * 0.80))*cantidad)
			}
			//2 corresponde a categoria trainee
			if(categoria.value == 2){

				return ((valorTicket - (valorTicket * 0.50))*cantidad)
			}
			//3 corresponde a categoria junior
			if(categoria.value == 3){
				return ((valorTicket - (valorTicket * 0.15))*cantidad)
			}else{
				alert("Por favor, seleccione una categoria.")
			return 0
			}

			
		
};

const limpiarCampos = (campos) =>{
	for(let campo of campos){
		campo.value = "";
	};
}

const limpiarFormulario = () =>{
		limpiarCampos(limpiarAdvertenciaCampoVacio());
		mostrarMontoFinal(" ");
}

const mostrarMontoFinal = (montoPago) =>{
	let digitoPago	= document.getElementById("monto");
	digitoPago.innerHTML = montoPago;
}

const pagoCompraTickets= () =>{

	limpiarAdvertenciaCampoVacio();
	let advertencia = advertenciaCampoVacio();
	

			if(advertencia) return;
				
				mostrarMontoFinal(calculoCategorias(cantidad.value));

		
	 

}


	resumen.addEventListener("click",pagoCompraTickets);
	borrar.addEventListener("click",limpiarFormulario);