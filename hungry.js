let hungry = 10;
let food = 10;

function eatFood(){
  hungry -= 1;
  food -= 1;
}

while (hungry != 0) {
  console.log('Your hungry: ' + hungry);
  console.log('Your food: ' + food);
  eatFood();
}
console.log('You are no longer hungry!');