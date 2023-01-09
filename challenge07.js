/*Get the two bigger scores, calculate the average score and discard the smaller

 Approved score >= 7
 Reavaliation score < 7 and score >= 4
 Repproved score < 4

 */

function minScore(score1, score2){
  return score1 <= score2 ? score1 : score2;
}

function calcScore(scoreA, scoreB, scoreC) {
  const minScore2 = minScore(scoreA, minScore(scoreB, scoreC));
  let finalScore = null;

  if(minScore2 === scoreA){
    finalScore = (scoreB + scoreC) / 2;
  }else if( minScore2 === scoreB){
    finalScore = (scoreA + scoreC) / 2;
  }else{
    finalScore = (scoreA + scoreC) / 2;
  }
  
  if (finalScore >= 7) {
    return 'Approved! Your final score: ' + finalScore;
  } else if (finalScore >= 4) {
    return 'Reavaliation. Your final score: ' + finalScore;
  } else if (finalScore < 4) {
    return 'Repproved. Your final score: ' + finalScore;
  }
}

console.log(calcScore(1,1,2));
