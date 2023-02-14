const values = [1, 67, 98, 2, 5, 8, 3]

console.log(values.sort((a, b) => a - b))

console.log( delete values[values.length - 1])
console.log(values)
console.log(values.splice(values.length - 1, 1))
console.log(values)

function deleteItemFromArray(item, array){
  for(let i = 0; i < array.length; i++){
    if(item === array[i]){
      array.splice(i, 1)
    }
  }
  return array
}

console.log(deleteItemFromArray(20, [1, 2, 3, 4]))