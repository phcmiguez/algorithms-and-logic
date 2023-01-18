//Fibonacci sequence

const stopPoint = 10;
let prevNumber = 0;
let actualNumber = 1;
let nextNumber = 1;

for (num=1;num<=stopPoint;num++){
  console.log(nextNumber);
  nextNumber = actualNumber + prevNumber;
  prevNumber = actualNumber;
  actualNumber = nextNumber;
}