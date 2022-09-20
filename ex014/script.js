function carregar (){
    var msg = window.document.getElementById('msg')
    var foto =  window.document.getElementById('img')
    var data =  new Date
    var hora = data.getHours
    var hora = Number(data.getHours())
    msg.innerHTML = `Agora são${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA//
        img.src = 'manha.png'
    }else if(hora >= 13 && hora < 18){
        //BOA TARDE//
        img.src = 'tarde.png'
    }else{
        //BOA NOITE//
        img.src = 'noite.png'
    }
    }

