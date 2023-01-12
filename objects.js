// Basics of Objects

const product = { //This = Used inside the OBJECT to refer the object attributes itself.
  name: 'Mouse',
  price: 198.70,
  discount: 0.2,
  finalPrice: function() {
    return this.price * (1 - this.discount);
  },
  discountPrice: function() {
    return this.price * this.discount;
  },
  calculateRate: function (a, b) { // Do not need THIS, because the values will be obtained outside the object.
    return a + b;
  }
}

console.log(product.name, '->', product.price, '->', product.discount);
console.log('The final price is $' + product.finalPrice() + ' and the discount was $' + product.discountPrice() + '.');
console.log(product.calculateRate(2,5));

product.type = 'Tech';

console.log(product);
