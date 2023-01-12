//Show the date from a method.

const marryDate = {
  day: 10,
  month: 12,
  year: 2022,
  showDate: function () {
    return `${this.day}/${this.month}/${this.year}`; // Br format
  }
}

console.log(marryDate.showDate());