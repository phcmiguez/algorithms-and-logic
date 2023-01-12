const names = [];

names[0] = function () {
  return 'Hello, world!';
};

const cars = ['uno', 'fiesta', 'civic', 'etios'];

for(let car of cars){
  console.log(car);
}

console.log(names[0]());

const element = () => {
  return 'OK';
};

console.log(element());

cars.forEach(function (el, i, array) {
  console.log(i, el, array);
});

cars.forEach(el => {
  console.log(el);
});