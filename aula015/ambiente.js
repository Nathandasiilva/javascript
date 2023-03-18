var num = [5, 8, 2, 9, 3]
num.push(1)       // O vetor push é adcionar o valor para o vetor, mas se for colado após os outros atribuitos ele entra depois.
num.sort()
console.log(`Os numeros dos vetores são ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor ${num[0]}`)

for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}