/*步骤2
现在，老师需要你帮助将学生们的分数转换成一个字母评级。

完善 getGrade 函数， 这个函数以一个数字类型的 score 作为参数。 你的函数应该根据分数返回一个字符串，代表字母评级。

这里是分数段和它们所对应的字母评级：

分数段	字母评级
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
*/
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  if (score === 100){
    return "A++";
  }else if (90<=score&&score<100 ){
    return "A";
  }else if (80<= score&&score <90){
    return "B";
  }else if (70<= score&&score <80){
    return "C";
  }else if (60<= score&&score <70){
    return "D";
  }else if (0<=score&&score <60){
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));