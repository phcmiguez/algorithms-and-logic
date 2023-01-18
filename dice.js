function playDice(faces){
  const diceResult = Math.ceil(Math.random() * faces);
  switch(diceResult){
    case 1:
      return 'You rolled a d' + faces + ' and the result was ' + diceResult + ' -- Critical error!';
    case faces:
      return 'You rolled a d' + faces + ' and the result was ' + diceResult + ' -- Critical success!';
    default:
      return 'You rolled a d' + faces + ' and the result was ' + diceResult;
  }
}

//d4
console.log(playDice(4))
//d6
console.log(playDice(6))
//d8
console.log(playDice(8))
//d10
console.log(playDice(10))
//d12
console.log(playDice(12))
//d20
console.log(playDice(20))
