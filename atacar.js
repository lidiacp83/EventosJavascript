window.addEventListener("keydown", function(event){
		if (event.key == "d") {
			if(mochila.armas[mochila.armas.length - 1].nombre == 'Granada'){
                granada.atacar(z);
            } else if (mochila.armas[mochila.armas.length - 1].nombre == 'Pistola'){
                pistola.atacar(z);
            } else {
                console.log('No tienes arma equipada');
            }
		} 
	});