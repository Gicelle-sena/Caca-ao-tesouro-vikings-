function escolhaBjorn() {
    return location = ("../fase1/bjornescolhido.html")
}

function escolhaLagertha() {
    return location = ("../fase1/lagerthaescolhida.html")
}

function escolhaRagnar() {
    return location = ("../fase1/ragnarescolhido.html")
}

//fase um //

function faseUmBjorn() {
    var destino = prompt("1- ENFRENTAR URSO.\n 2- IR POR OUTRO CAMINHO")
    if (destino == "1") {
        return location = ("../passouf1/talismabjorn.html")
    } else if (destino == "2" ) {
        return location = ("../gamerover/gameover.html")
    } 
    
}


function faseUmLagertha() {
    var destino = prompt("1- ENFRENTAR URSO.\n 2- IR POR OUTRO CAMINHO")
    if (destino == "1") {
        return location = ("../passouf1/talismalagertha.html")
    } else if (destino == "2" ) {
        return location = ("../gamerover/gameover.html")
    } 
    
}

function faseUmRagnar() {
    var destino = prompt("1- ENFRENTAR URSO.\n 2- IR POR OUTRO CAMINHO")
    if (destino == "1") {
        return location = ("../passouf1/talismaragnar.html")
    } else if (destino == "2" ) {
        return location = ("../gamerover/gameover.html")
    } 
    
}

//talisma //

function talismaBjorn() {
    return location = ("../fase2/bjorn2.html")

}

function talismaLagertha() {
    return location = ("../fase2/lagertha2.html")

}

function talismaRagnar() {
    return location = ("../fase2/ragnarf2.html")

}

//Gamer over Um //

function gamerOverUm() {
    return location = ("../escolhadopersonagem.html")
}

// fase dois//

function faseDoisBjorn() {
    var destino = prompt("1- ASSAR E COMER CARNE DE URSO.\n 2- PESCAR")
    if (destino == "1") {
        return location = ("../fase3/bjornfase3.html")
    } else if (destino == "2" ) {
        return location = ("../gamerover/gameover.html")
    } 
}

function faseDoisLagertha() {
        var destino = prompt("1- ASSAR E COMER CARNE DE URSO.\n 2- PESCAR")
        if (destino == "1") {
            return location = ("../fase3/lagertha3.html")
        } else if (destino == "2" ) {
            return location = ("../gamerover/gameover.html")
        } 
    }
function faseDoisRagnar() {
            var destino = prompt("1- ASSAR E COMER CARNE DE URSO.\n 2- PESCAR")
            if (destino == "1") {
                return location = ("../fase3/ragnar3.html")
            } else if (destino == "2" ) {
                return location = ("../gamerover/gameover.html")
            } 
        }
//fase tres //


 function faseTresBjorn() {
     return location = ("../passouf1/talismab2.html")
 }

 function faseTresLagertha() {
     return location = ("../passouf1/talismal2.html")
 }

 function faseTresRagnar() {
     return location = ("../passouf1/talismar2.html")
 }

 //fase final //

 function faseFinalBjorn() {
        return location = ("../final/bjornfinal.html")

 }

 function faseFinalLagertha(){
     return location =("../final/lagerthafinal.html")
 }

 function faseFinalRagnar() {
     return location=("../final/ragnarfinal.html")
 }

// fase final parte 2 //

function start(){
    var escolha = prompt("1-Esperar o entardecer para atacar.\n 2- Sequestrar filha do rei e fazer acordo")
    if ( escolha == "1") {
    return location = ("../fase2/gamerover2.html")
    } else if (escolha == "2") {
        return location = ("../final/venceu.html")
    }
}


// gamer over dois // 
function venceu() {
    return location = ("../index.html")
}



function  gamerOver2() {
    return location = ("../escolhadopersonagem.html")

}
