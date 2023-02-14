const products = [
  {name: 'Laptop', price: 8900, fragile: true},
  {name: 'iPad', price: 2200, fragile: true},
  {name: 'Ball', price: 3, fragile: false},
  {name: 'Machine Gun', price: 38900, fragile: false},
]

const totalPrices = products
                    .filter(element => element.price > 5000 && element.fragile)
                    .map(element => element.price)
                    .reduce((accumulator, currentValue) => accumulator + currentValue)

Array.prototype.myFilter = function(callback) {
  const newArr = []
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, this)){
      newArr.push(this[i])
    }
  }
  return newArr
}

console.log(products.myFilter(el => el.fragile))

console.log(totalPrices)