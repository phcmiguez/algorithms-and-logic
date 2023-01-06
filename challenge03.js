let a = 43;
let b = 52;

function swapNumbers(x, y){
  const stash = x;
  x = y;
  y = stash;
  return 'The values was successfully swapped!\nNow the first value is ' + x + ' and the second value is ' + y + '.';
}

console.log(swapNumbers(a,b))