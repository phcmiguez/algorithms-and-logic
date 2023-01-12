//Class

class Product {
  name = 'iPad';
  model = 'A28M1';
  year = 2023;
  turnOn = function() {
    return 'Online';
  }
};

const i = new Product;

console.log(i.turnOn());
