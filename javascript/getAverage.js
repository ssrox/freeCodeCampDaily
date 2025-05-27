/*步骤 1
一位老师已经完成了学生的考试评级，需要你帮忙计算全班的平均分。

完成 getAverage 函数，该函数接收考试分数数组并返回平均分数。

平均分是通过累加所有得分并除以得分的数量来计算的。

示例代码
这里有一些写好的函数调用的例子，便于你来测试你自己的代码。

提示：1

你可以使用循环来累加 scores 数组以计算总分。
你可以使用 length 属性来获取得分的数量。*/
function getAverage(scores) { 
  let sum = 0 ;//存储sum
  for (let i = 0 ; i < scores.length;i++){//从i=0，到i小于scores数组的长度，i++
    sum += scores[i];               //第一个，就是sum+=scores[0]，也就是scores数组中的第一个数组，以此类推
  }
  return sum/scores.length;       //无需多言
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));