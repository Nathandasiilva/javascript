
function contar() {
    var ini = document.getElementById('txti')   
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

 if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossivel contar!'
}
   else {
    res.innerHTML = 'Contando: <br> '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0){
         window.alert('[ERRO] Acresente um numero no passo, para fazer a conta!')
         p = 1
    }

    if(i < f){
         for( var c = i; c <= f; c += p) {   // contagem cresente
         res.innerHTML += ` ${c} \u{1f449}`    
    }
    } 
    else {                                
         for(var c = i; c >= f; c -= p) {    // contagem regresiva
         res. innerHTML += `${c} \u{1F449}`
    }
    }
         res.innerHTML += `\u{1F3C1}`

    }
    
}

