window.addEventListener("keydown", function(event){
		if (event.key == "r") {
            if (mochila.armas[mochila.armas.length - 1].nombre == 'Pistola'){
                pistola.recargar();
            } else if (mochila.armas[mochila.armas.length - 1].nombre == 'Granada'){
                console.log('Este arma no es recargable');
            }
		}
});