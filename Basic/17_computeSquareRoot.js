// computeSquareRoot
// 문제
// 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)
// 출력
// number 타입을 리턴해야 합니다.
// 최대 소수점 둘째 짜리까지 구합니다. (소수점 셋째 자리에서 반올림)
// 주의 사항
// Math.sqrt 사용은 금지됩니다.
// 입출력 예시
// let output = computeSquareRoot(9);
// console.log(output); // --> 3

// output = computeSquareRoot(6);
// console.log(output); // --> 2.45
// 힌트
// 소수점 처리는 javascript 표준 내장 객체인 Number를 검색해 봅니다. (js decimal places limit 또는 자바스크립트 소수점 자리수)
// 항상 타입을 주의하여야 합니다.
// 각 자리수(1, 0.1, 0.01, 0.001)마다 (목표값을 넘지 않는) 근사값을 구하는 방식이 있습니다.
// 제곱근을 구하는 방법 중 바빌로니아 법이 있습니다. 바빌로니아 법의 점화식(recurrence formula)을 이해할 수 있다면, 해당 식을 이용해 문제를 풀어도 좋습니다.

function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  let arr = [1, 0.1, 0.01, 0.001];
  let base = 1;
  for (let i = 0; i < arr.length; i++) {
    while (base * base < num) {
      base = base + arr[i];
    }

    if (base * base === num) {
      return base;
    } else {
      base = base - arr[i];
    }
  }
  return Number(base.toFixed(2));
}

// function computeSquareRoot(num) {
// let num1;
// let num2;
// let num3;
// let num4;
// let result;

// for(let i=0; ii<=num; i++){
//   if(num === ii){
//     return i;
//   }
//   else{
//     num1 = ${i}.;
//   }
// }

// for(let j=0; Number(num1+j)Number(num1+j)<num; j++){
//     num2 = num1+j;
// }

// for(let k=0; Number(num2+k)Number(num2+k)<num; k++){
//   num3 = num2+k;
// }
// for(let q=0; Number(num3+q)*Number(num3+q)<num; q++){
//   num4 = Number(num3+q);
// }
// return Number(num4.toFixed(2));
// }
