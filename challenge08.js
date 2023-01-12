//Show the date from a method.

const marryDate = {
  day: 10,
  month: 12,
  year: 2022,
  showDate: function () {
    return `${this.day}/${this.month}/${this.year}`; // Br format
  }
};

console.log(marryDate.showDate());

//Methods reuse
function createDate(day, month, year){
  return {
    day,
    month,
    year,
    showDate() {
      return `${this.day}/${this.month}/${this.year}`;
    }
  };
};

const birthDate = {
  day: 23,
  month: 11,
  year: 1984,
};

const graduateDate = {
  day: 18,
  month: 09,
  year: 2018,
};

console.log(createDate(birthDate.day, birthDate.month, birthDate.year).showDate());
console.log(createDate(30,09,2017).showDate());