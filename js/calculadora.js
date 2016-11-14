
//variable global
var operador = "";


function operadores(ope) //*,-,+,/
{
	operador = ope;
}

function igual()
{
		var valor1 = document.calculadora.operando1.value;
		var valor2 = document.calculadora.operando2.value;
		var resultado="";

		document.calculadora.resultado.value = eval(valor1+operador+valor2);

		//if( operador == "+")
		


}

function limpiar()
{
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}

function numeros(num)
{
	if(operador == "") //ecribir en operando 1
	{   
		// DOM=document object model
		var valor = document.calculadora.operando1.value;
		if (valor=="0")
		{
			document.calculadora.operando1.value = "";
		}

		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	 }

	 else
	 {  
	 	var valor = document.calculadora.operando2.value;
		if (valor=="0")
		{
			document.calculadora.operando2.value = "";
		}

		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	 }
}