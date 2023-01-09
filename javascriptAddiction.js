//Coding in JS - Javascript Addiction
//CAUTION! - It may enter in infinity loop.

let sleep = true;
let expInJavascript = 0;

function codeJs(){
  console.log('Codando JavaScript!!');
  expInJavascript++;
}

while (!sleep){
  codeJs();
}