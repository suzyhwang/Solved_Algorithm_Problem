// https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
    return arr.reduce((a, b)=> a + b) / arr.length;
  }
  