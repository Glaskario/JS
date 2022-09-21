function carregar (){
    var msg = window.document.getElementById('msg')
    var foto =  window.document.getElementById('img')
    var data =  new Date
    var hora = data.getHours
    var hora = Number(data.getHours())
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA//
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#b78669'
    } else if(hora >= 13 && hora < 18){
        //BOA TARDE//
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#edd4b6'
    } else {
        //BOA NOITE//
        img.src = 'imagens/noite.png'
        document.body.style.background = '#675738'
    }
    }

