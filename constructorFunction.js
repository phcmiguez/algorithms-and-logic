//Constructor function

function ProductDate(year = 2023, month = 1, day = 1){
  this.year = year;
  this.month = month;
  this.day = day;
  this.showDate = function(){
    return `${this.year}-${this.month}-${this.day}`;
  }
}

const p1 = new ProductDate();
const p2 = new ProductDate(2013, 07, 25);
const p3 = new ProductDate(2017, 09, 30);

console.log(p1.showDate());
console.log(p2.showDate());
console.log(p3.showDate());