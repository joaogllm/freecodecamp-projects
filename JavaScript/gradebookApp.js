function getAverage(scores) {
  let result = 0;

  for (let i = 0; i < scores.length; i++) {
    result += scores[i];
  }

  return result / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let passingGrade = getGrade(score);

  return passingGrade !== "F";
}

function studentMsg(scores, studentScore) {
  let classAverage = getAverage(scores);
  let studentGrade = getGrade(studentScore);
  let hasPassed = hasPassingGrade(studentScore);

  return hasPassed
    ? `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`
    : `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
}

console.log(getGrade(100));
console.log(getAverage([70, 80, 90]));
console.log(hasPassingGrade(50));
