
let altura = 0
let largura = 0
let vidas= 1
let tempo = 15
let mosquito = ''

let criaMosquitoTempo =  1500

let nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel === 'normal'){
    //1500
    let criaMosquitoTempo =  1500
}
    else if(nivel === 'dificil'){
        
        //1000
        let criaMosquitoTempo =  1000

    }else if (nivel === 'chucknorris'){
        //750
        let criaMosquitoTempo =  750

    }



function ajudarTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajudarTamanhoPalcoJogo()
let cronometro = setInterval(function(){
    tempo -=1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
        
    }else{

    
    document.getElementById('cronometro').innerHTML = tempo 
    }

}, 1000)


function PosicaoRandomica(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        
        

        if(vidas >3){
            
            window.location.href = 'fim_de_jogo.html'

        }else {
            document.getElementById('v' + vidas).src="../imagens/coracao_vazio.png"
            vidas++
        }


    }


    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random()* altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // criar o elemento html

    let mosquito = document.createElement('img')
    mosquito.src = '../imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onmouseover  = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3)
    switch(classe){
        case 0 :
            return 'mosquito1'
        case 1 :
            return 'mosquito2'

            case 2 :
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB' 
    }
}

