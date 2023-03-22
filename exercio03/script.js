function numero() {
    let num = document.getElementById('num')
    let amr = document.getElementById('armazenamento')

    if ( num.value.length == 0 ){
    window.alert('Nenhum numero encontrado')
    } else {
        let n = Number(num.value)
        let c = 1 
        amr.innerHTML = ''
       }
}