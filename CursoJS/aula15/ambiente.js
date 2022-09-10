let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
/*num[3] = 6
num.push(7)// coloca na última posição do vetor
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Vetor ordenado ${num.sort()}`)
for (let pos=0; pos <= num.length; pos++){
    console.log(`A posição ${pos} tem ${num[pos]}`)
}*/

for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(`O valor 8 está na posição ${num.indexOf(8)}`)
