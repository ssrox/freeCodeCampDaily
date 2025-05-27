/*步骤4
现在，教师们已经掌握了他们所需要的所有信息，他们希望能够将结果告诉学生。

完善 studentMsg 函数，这个函数以 totalScores 和 studentScore 作为参数。 这个函数应该返回一个字符串，代表给学生的信息。

如果学生通过了该课程，字符串应遵循这种格式：

示例代码
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.
如果学生没通过该课程，字符串应该遵循这种格式：

示例代码
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.
将 average-goes-here 替换为总分的平均值。 将 grade-goes-here 替换为学生的成绩。

提示：

使用 getAverage 函数来获得班级平均分。
调用 getGrade 函数来获得学生的评级。
用字符串连接符（+）来创建发给学生的信息。
请留意信息中的标点符号和空格。*/

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
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  if (getGrade(studentScore)=="F"){
    return "Class average: "+getAverage(totalScores)+". "+
            "Your grade: "+getGrade(studentScore)+". "+
            "You failed the course."
  }else{
    return "Class average: "+getAverage(totalScores)+". "+
            "Your grade: "+getGrade(studentScore)+". "+
            "You passed the course."
    
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
