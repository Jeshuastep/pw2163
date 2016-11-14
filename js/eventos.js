// $ = jquery !!
//DOM = modelo de objetos de documento
var inicio = function() // Main
{
	var dameclic = function()
	{
		alert ("Le di click a un botón");
	}
	$("#dameClic").on("click",dameclic);

}

//Inicializar el documento
$(document).on("ready",inicio);
// (Izquiierda = event , derecha = accion)

//una funcion anonima se le puede asignar a una variable

