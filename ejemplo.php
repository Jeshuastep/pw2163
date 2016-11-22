
<?php  
//Preguntar si los valores existen
	$oculto = "";
	$usuario = "";
	$nombre = "";
	$clave = "";
	$tipo = "";
	if (isset($_POST["txtOculto"])) //Si esque trae valores
	{
		$oculto = $_POST["txtOculto"];
	}
	if (isset($_POST["txtUsuario"])) //Si esque trae valores
	{
		$usuario = $_POST["txtUsuario"];
	}
	if (isset($_POST["txtNombre"])) //Si esque trae valores
	{
		$nombre = $_POST["txtNombre"];
	}
	if (isset($_POST["txtClave"])) //Si esque trae valores
	{
		$clave = $_POST["txtClave"];
	}
	if (isset($_POST["txtTipo"])) //Si esque trae valores
	{
		$tipo = $_POST["txtTipo"];
	}

	function guardaUsuario($usuario,$nombre,$clave,$tipo)
	{
		//conectarse al servidor MySQL
		$conexion = mysql_connect("localhost","root","");
		//seleccionamos la base de datos
		mysql_select_db("bd2163");
		$consulta = "insert into usuarios values('".$usuario."','".$nombre."','".$clave."','".$tipo."')";
		//ejecutamos la consulta
		mysql_query($consulta);
		//preguntamos si hubo insercion
		if (mysql_affected_rows() > 0) 
		{
			print "Registro guardado.";
		}
		else
		{
			print "No se pudo guardar el registro";
		}
	}

	switch ($oculto) {
		case 'guardaUsuario':
			guardaUsuario($usuario,$nombre,$clave,$tipo);
			break;
		
		default:
			# code...
			break;
	}

?> 


<h1>Alta de usuarios</h1>
<form action="ejemplo.php" method="POST">  
	<input type="hidden" name="txtOculto" value="guardaUsuario"> <br>
	<input type="text" name="txtUsuario" id="txtUsuario"><br>
	<input type="text" name="txtNombre" id="txtNombre"><br>
	<input type="password" name="txtClave" id="txtClave"><br>
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
		
	</select>
	<input type="submit" value="Enviar">
</form>



<!-- <?php  

	// for ($i=0; $i < 10; $i++) 
	// { 
	// 	print "Valor:" .$i."<br>";

	// }


?> -->