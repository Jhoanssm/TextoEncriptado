    function encriptar(){
        var frase = document.getElementById("textoEncriptado").value.toLowerCase(); //Si esta en mayuscula, todo se vuelve minuscula

        var textoEncriptado = frase.replace(/e/img, "enter");
        var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

        //aA continuacón se manda a imprimir
        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    };

    function desencriptar(){
        var frase = document.getElementById("textoEncriptado").value.toLowerCase(); //Si esta en mayuscula, todo se vuelve minuscula

        var textoEncriptado = frase.replace(/enter/img, "e");
        var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        //aA continuacón se manda a imprimir
        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        // document.getElementById("copybutton").style.display = "show";
        // document.getElementById("copybutton").style.display = "inherit";
    };

    function copiar(){

        var contenido = document.querySelector("#textoDesencriptado");
        contenido.select();
        document.execCommand("copy");
    }