function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente!')
    }  else {
        var fsex =  document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'adolecente-menino.png')
            } else if (idade < 50) {
                //eAdulto
                img.setAttribute('src', 'homem-jovem.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                //adolecente
                img.setAttribute('src', 'adolecente-menina-f.png')
            } else if (idade < 50) {
                //eAdulto
                img.setAttribute('src', 'mulher-jovem.png')
            } else {
                //idosa
                img.setAttribute('src', 'mulher-idosa.png')
            }
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}