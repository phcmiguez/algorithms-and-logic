/*Get the two bigger scores, calculate the average score and discard the smaller

 Approved score >= 7
 Reavaliation score < 7 and score >= 4
 Repproved score < 4

 */

function calcScore(scoreA, scoreB, scoreC) {
  let finalScore = null;
  if (scoreA > scoreB && scoreB > scoreC) {
    //Score C is smallest
    finalScore = (scoreA + scoreB) / 2;
  } else if (scoreB > scoreC && scoreC > scoreA) {
    //Score A is smallest
    finalScore = (scoreC + scoreB) / 2;
  } else {
    //Score B is smallest
    finalScore = (scoreC + scoreB) / 2;
  }

  if (finalScore >= 7) {
    return 'Approved! Your final score: ' + finalScore;
  } else if (finalScore < 7 && finalScore >= 4) {
    return 'Reavaliation. Your final score: ' + finalScore;
  } else if (finalScore < 4) {
    return 'Repproved. Your final score: ' + finalScore;
  }
}

console.log(calcScore(3.8, 9.8, 3.6));
