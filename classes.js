//Class

class Product {

  constructor(name = 'No name', model = 'No model', year = 2000){
    this.name = name;
    this.model = model;
    this.year = year;
  };

  showProductDetails() {
    return `---\nName: ${this.name}\nModel: ${this.model}\nYear: ${this.year}\n---`;
  };

};

const ipad = new Product('iPad', 'A18M23', 2023);

console.log(ipad.showProductDetails());
