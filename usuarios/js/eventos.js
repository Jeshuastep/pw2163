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
		alert("xd");

		if (usuario!="" && clave!="") //Validamos que no estèn vacios
		{
				$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
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
				error:function(xhr,ajaxOptions,thrownError){
					
				}
			});
		}
		else
		{
			alert("Usuario y clave son Obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);
	var teclaClave = function(tecla)
	{
		if(tecla.which == 13)
		{
			validaUsuario(); //funcin que valida al usuario

		}
	}
	//keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input.
	$("#txtClave").on("keypress",teclaClave);

}

//evento inicial
$(document).on("ready",inicioUsuarios);

