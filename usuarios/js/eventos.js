var inicioUsuarios = function()
{
	var validaUsuario = function()
	{
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//Preparar los paràmetros para ajax
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		//Hacemos la peticion remota
	

		//validamos

		if (usuario!="" && clave!="") //Validamos que no estèn vacios
		{
				$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data: parametros,
				succes: function (response) 
				{
				//si todo sale bien
					if (response.respuesta == true) 
						{
							$("#entradaUsuario").hide();
							$("nav").show();
						}
						else
						{
							alert("Datos incorrectos");
						}

				},
				error: function(xhr, ajaxOptions, thrownError){
					
				}
			});
		}
		else
		{
			alert("Usuario y clave son Obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);

}

//evento inicial
$(document).on("ready",inicioUsuarios);

