// Half Xmas tree
let tree = '';

//Way 01
for (i = 0; i <= 5; i++){
  tree += '#';
  console.log(tree);
}

console.log('---------');

//Way 02 - While
let tree2 = '';
while( tree2 != '######'){
  tree2 += '#';
  console.log(tree2);
}

console.log('---------');

//Way 03 - For without numeric values
for (let tree = ''; tree !== '#######'; tree += '#'){
  console.log(tree);
}