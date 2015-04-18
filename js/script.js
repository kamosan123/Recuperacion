window.onload=function(){

	var rango=0, intentosMaximos=20, numeroIntentos=0, encontrarNumero=0;

	var inicio= function(){
	
		rango=Math.floor((Math.random()*200)+1);
		encontrarNumero=Math.floor((Math.random()*rango)+1);
        nom_div("rangoAdivina").innerHTML="El número está entre 1 y "+rango;
		nom_div("intentos").innerHTML="INTENTO "+numeroIntentos+" DE "+intentosMaximos;
		
		nom_div("numero").value="";
		nom_div("numero").focus();
		console.log("wl numero es: "+encontrarNumero);

		};
	inicio();
	nom_div("inicio").addEventListener("click",function(event){

		inicio()

	});
	var adivinarNumero=function(){
		var estados="";
		var adivinar=nom_div("numero");
		if(adivinar!==0){

			var numero=Number(adivinar.value);
			if(numero>=1&&numero<=rango){

				var pista="";

				if(numeroIntentos<intentosMaximos){
					numeroIntentos++;
					nom_div("intentos").innerHTML="INTENTO "+numeroIntentos+" DE "+intentosMaximos;

					if(numero===encontrarNumero){

						pista="FELICITACIONES EL NUMERO ES: "+numero
					}
					else{

						var probabilidad=(numero/encontrarNumero)*100;
						var numEstado=0;
						if(numero<encontrarNumero){

							if(probabilidad<50){
								estados="Frio, Frio";
							}
							else{
								if(probabilidad<90){
									estados="Tibio, ya casi";
								}
								else{
									estados="Te estas quemando :D";
								}
							}
						}
						else{
							if(numero>encontrarNumero){
								probabilidad=probabilidad-100;
								if(probabilidad<10){
								estados="Te estas quemando :D";
								}	
								else{
									if(probabilidad<60){
									estados="Tibio, ya casi";
									}
								else{
									estados="Frio, Frio";
									}
							}

						}
						}
						pista=estados;
					}
				}
				else{
				alert(pista="Mala suerte el numero era: "+numero);
				numeroIntentos=0;
				}
				nom_div("pista").innerHTML=pista;
			}
			else
				{
				nom_div("pista").innerHTML="El número debe estar entre 1 y "+rango;
				adivinar.focus()

			}
		}
		else
			{
			nom_div("pista").innerHTML="Por favor escribe un número";
			adivinar.focus()
		}
	};
	nom_div("form").addEventListener("submit",function(event)
		{
		adivinarNumero();
		event.preventDefault();
		return false
	}
	);
	function nom_div(div){
		return document.getElementById(div)
	}
	
}




