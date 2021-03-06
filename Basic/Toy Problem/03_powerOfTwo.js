// 문제
// 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 1)
// 출력
// boolean 타입을 리턴해야 합니다.
// 주의 사항
// 반복문(while)문을 사용해야 합니다.
// 2의 0승은 1입니다.
// Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.
// 입출력 예시
// let output1 = powerOfTwo(16);
// console.log(output1); // true
// let output2 = powerOfTwo(22);
// console.log(output2); // false
// 1234567891011121314
// function powerOfTwo(num) {
// TODO: 여기에 코드를 작성합니다.
// 수를 입력받아 2의 거듭제곱인지 여부 리턴
// 2의 거듭 제곱
// 1 4 8 16
//   let arr = [1]
//   let n = 2
//   while(n <= num){
//     n = n * 2
//     arr.push(n)
//   }
//   return arr.includes(num)
// }

// 실행 결과
// 테스트 결과가 없습니다.

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.
  // 16은 2의 4 거듭제곱이다
  // 22는 2의 거듭제곱이 아니다
  // 2를 계속 곱해서 맞으면 된다
  let two = 2;
  while (num > two) {
    two = two * 2;
  }
  if (num === two || num === 1) {
    return true;
  } else {
    return false;
  }
}
