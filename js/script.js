window.onload=function(){

	var rango=0, intentosMaximos=20, numeroIntentos=0, encontrarNumero=0,pista="";

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
		var numero=Number(nom_div("numero").value);
		if(numero!==0){

			
			if(numero>=1&&numero<=rango){

				
				if(numeroIntentos<intentosMaximos){
					numeroIntentos++;
					nom_div("intentos").innerHTML="INTENTO "+numeroIntentos+" DE "+intentosMaximos;

					if(numero===encontrarNumero){

						var resultado="FELICITACIONES EL NUMERO ES: "+numero;
						nom_div("pista").innerHTML=resultado;

					}
					else{

						var probabilidad=(numero/encontrarNumero)*100;
						var numEstado=0;
						if(numero<encontrarNumero){

							if(probabilidad<50){
								estados="Frio, Frio";
								nom_div("pista").innerHTML=estados;
							}
							else{
								if(probabilidad<90){
									estados="Tibio, ya casi";
									nom_div("pista").innerHTML=estados;
								}
								else{
									estados="Te estas quemando :D";
									nom_div("pista").innerHTML=estados;
								}
							}
						}
						else{
							if(numero>encontrarNumero){
								probabilidad=probabilidad-100;
								if(probabilidad<10){
								estados="Te estas quemando :D";
								nom_div("pista").innerHTML=estados;
								}	
								else{
									if(probabilidad<60){
									estados="Tibio, ya casi";
									nom_div("pista").innerHTML=estados;
									}
									else{
								estados="Frio, Frio";
								nom_div("pista").innerHTML=estados;
										}
								}		

							}	
						}
						
					}
				}
				else{
				alert("Mala suerte el numero era: "+numero);
				numeroIntentos=0;
				inicio();
				}
				
			}
			else
				{
				pista="El número debe estar entre 1 y "+rango;
				nom_div("pista").innerHTML=pista;
				numero.focus();

			}
		}
		
	};
	nom_div("form").addEventListener("submit",function(event)
		{
		event.preventDefault();
		adivinarNumero();
		numero.focus();
		
		
	}
	);
	function nom_div(div){
		return document.getElementById(div);
	}
	
}


