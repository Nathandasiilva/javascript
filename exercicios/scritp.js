
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12) {
    // BOM DIA!!
    img.src = 'dia.png'
    document.body.style.background = '#d59fbe'
    document.body.style.div.p = 'white'
} else if (hora >= 12 && hora < 18){
    //BOA TARDE!!
    img.src = 'tarde.png'
    document.body.style.background = '#a73800'
} else {
    //BOA NOITE!!
    img.src = 'noite.png'
    document.body.style.background = '#f19956'
}
}