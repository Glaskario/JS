function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
    var ano = Number(data.getFullYear())
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) >  ano){
        window.alert('Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img = document.querySelector('img#img')
        img.setAttribute('id', 'foto') 
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'homem_bebe.png')
            } else if (idade >= 10 && idade < 16){

                //criança
                img.setAttribute('src', 'homem_crianca.png')
            } else if ( idade >= 16 && idade < 21){
                //jovem adulto
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade >= 21 && idade < 45 ){
                //adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else if (idade >= 45 ){
                //idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'mulher_bebe.png')
            } else if (idade < 16){

                //criança
                img.setAttribute('src', 'mulher_crianca.png')
            } else if ( idade < 21){
                //jovem adulto
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 45 ){
                //adulto
                img.setAttribute('src', 'mulher_adulta.png')
            } else if (idade >= 45 ){
                //idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

