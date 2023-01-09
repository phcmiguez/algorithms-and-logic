// Script to guess a number

function guess(suggest){
  let number = Math.ceil(Math.random() * 10);
  let count = 0;
  while (suggest != number){
    console.log('Wrong suggestion! Try again.');
    count++;
    if (suggest > number){
      number++;
    }else{
      number--;
    }
  }
  console.log(`Yes! You tried ${count} times to hit the correct number. The number was ${number}.`);
}

guess(7);