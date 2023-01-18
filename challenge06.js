//Return a Score grade by a number

function getScoreByNumber(number = 0){
  switch (Math.ceil(number)){
    case 10: return 'Your grade is A+';
    case 09: return 'Your grade is A';
    case 08: return 'Your grade is B+';
    case 07: return 'Your grade is B';
    case 06: return 'Your grade is C+';
    case 05: return 'Your grade is C';
    case 04: return 'Your grade is D+';
    case 03: return 'Your grade is D';
    case 02: return 'Your grade is E+';
    case 01: return 'Your grade is E';
    case 00: return 'Your grade is F';
    default: return null;
  }
}

console.log(getScoreByNumber(10));