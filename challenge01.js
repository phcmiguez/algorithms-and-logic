//Print the odd and even numbers from 1 to 10
sep = '--------------------------------------';

//Only Odd
for (num=1;num<=10;num++){
  if(num%2 != 0){
    console.log(num + ' = Odd');
  }
}

console.log(sep);

//Only Even
for (num=1;num<=10;num++){
  if(num%2 == 0){
    console.log(num + ' = Even');
  }
}

console.log(sep);

//Both - Odd and Even
for (num=1;num<=10;num++){
  if(num%2 != 0){
    console.log(num + ' = Odd');
  }else{
    console.log(num + ' = Even');
  }
}