/*步骤 3
老师对你目前所做的方案感到非常开心。 但是现在他们希望有一种简单的方法来检查学生的成绩是否合格。 只要不是 "F" 评级，就是成绩合格。

完善 hasPassingGrade 函数，这个函数把学生的分数作为参数。 如果这个学生的成绩合格，那么你的函数应该返回 true，否则返回 false。

提示：

使用 getGrade 函数来获得学生的评级。 然后检查这个评级是否及格。*/
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
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
  if (score>=60){
    return true;
  }else {
    return false;
  }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));