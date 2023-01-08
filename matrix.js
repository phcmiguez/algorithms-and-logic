//Showing a 3x3 matrix

for (let i = 1; i <= 3; i++) {
  let matrix = '';
  for (let j = 1; j <= 3; j++) {
    if (i === 3 && j === 3){
      matrix += `[${i}, ${j}] `;
    }else{
      matrix += `[${i}, ${j}], `;
    }
  }
  console.log(matrix);
}


console.log('-------------');

for (let i = 1; i <= 3; i++) {
  let matrix = '';
  for (let j = 1; j <= 3; j++) {
    if (i !== j){
      matrix += `[${i}, ${j}] `;
    }
  }
  console.log(matrix);
}
