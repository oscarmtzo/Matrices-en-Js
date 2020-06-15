let matriz = [
  [null, null, 'S', null, 'S'],
  ['S', null, null, 'S', null],
  [null, 'S', null, null, null],
  [null, 'S', null, null, null],
  ['S', null, null,'S', null]
]
console.log(matriz)
console.log(matriz[0][1])
console.log('---->      espacio')

//iteración en una matriz
for (let i =0; i<=(matriz.length-1); i++ ){
  //console.log(matriz[i], 'aqui')
  for (let j = 0; j<=(matriz[i].length-1); j++){
    if(matriz[i][j] == 'S'){
      console.log('Sunk')
    }
  }
}