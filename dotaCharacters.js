let chars = ['Omniknight','Kunkka','Goblin Techies','Slardar','Witch Doctor'];

function randomChars(){
  let randomIndex = parseInt(Math.random() * chars.length);
  return 'Your character is ' + chars[randomIndex];
}

console.log(randomChars());