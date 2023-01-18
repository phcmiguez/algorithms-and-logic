//Function into constant

const addNumbers = function (a, b){
  return a + b;
}

const subNumbers = function (a, b){
  return a - b;
}

const multNumbers = function (a, b){
  return a * b;
}

const divNumbers = function (a, b){
  return a / b;
}

function execute(fn, n1, n2){
  if(typeof fn === "function"){
    console.log(fn(n1, n2));
  }
}

execute(addNumbers, 5, 2);
execute(subNumbers, 5, 2);
execute(multNumbers, 5, 2);
execute(divNumbers, 5, 2);
