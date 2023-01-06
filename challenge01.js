//Print the odd and even numbers from 1 to 10
const sep = '--------------------------------------';
const maxNum = 10;

//Only Odd
for (minNum = 1; minNum <= maxNum; minNum++) {
  if (minNum % 2 != 0) {
    console.log(minNum + ' = Odd');
  }
}

console.log(sep);

//Only Even
for (minNum = 1; minNum <= maxNum; minNum++) {
  if (minNum % 2 == 0) {
    console.log(minNum + ' = Even');
  }
}

console.log(sep);

//Both - Odd and Even
for (minNum = 1; minNum <= maxNum; minNum++) {
  if (minNum % 2 != 0) {
    console.log(minNum + ' = Odd');
  } else {
    console.log(minNum + ' = Even');
  }
}
