function rand([min = 1, max = 1000]){
  if(min > max) [min, max] = [max, min]
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

const d100 = [1, 100]

console.log(rand(d100))