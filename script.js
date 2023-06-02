	var input = document.getElementById("textoOriginal");
	var output = document.getElementById("textoCodificado");

	function encriptar(){
		var nuevomensaje = input.value.replace(/e/g, "enter")
									  .replace(/i/g, "imes")
								      .replace(/a/g, "ai")
									  .replace(/o/g, "ober")
									  .replace(/u/g, "ufat");
		document.getElementById("textoCodificado").value = nuevomensaje;

	}

	function desencriptar(){
		var nuevomensaje = input.value.replaceAll(/ai/g, 'a')
                              		  .replaceAll(/enter/g, 'e')
                                      .replaceAll(/imes/g, 'i')
                                      .replaceAll(/ober/g, 'o')
                                      .replaceAll(/ufat/g, 'u');
		document.getElementById("textoCodificado").value = nuevomensaje;

	}

    function copiar(){
        var contenido = document.getElementById("textoCodificado");
        contenido.select();
        document.execCommand("copy");
        alert("Copiado");
    }