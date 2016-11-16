// $ = jquery !!
//DOM = modelo de objetos de documento
var inicio = function() // Main
{
	var dameclic = function()
	{


					$.ajax({
			  url: 'https://randomuser.me/api/',
			  dataType: 'json',
			  success: function(data) 

			  {
			  	$ ("#txtNombre").val(data.results[0].name.first+ " " +data.results[0].name.last);
			  	$ ("#imgFoto").attr("src",data.results[0].picture.medium);

			    console.log(data.results[0].name.first+ " " +data.results[0].name.last);

			    // console.log(data.results[0].location.street+ "  " +data.results[0].location.city);
			 	 }
			});
      
	}
	$("#dameClic").on("click",dameclic);

}

//Inicializar el documento
$(document).on("ready",inicio);
// (Izquiierda = event , derecha = accion)

//una funcion anonima se le puede asignar a una variable

