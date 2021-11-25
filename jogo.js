function recebeERedireciona (texto,linka,linkb) {
        var inputUsuario = prompt(texto);
        
        if (inputUsuario === "1") { 
            window.location.href= "linka";

        }   else if (inputUsuario === "2") {
            window.location.href="linkb";

        }

        else {
                alert("Tente novamente!")

        }


}
        