// power
// 문제
// 두 수를 입력받아 거듭제곱을 리턴해야 합니다.

// 입력
// 인자 1: base
// number 타입의 자연수 (base >= 2)
// 인자 2: exponent
// number 타입의 정수 (exponent >= 0)
// 출력
// number 타입을 리턴해야 합니다.
// 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야 합니다.
// 주의사항
// Math.pow, 거듭제곱 연산자 사용은 금지됩니다.
// 시간복잡도 O(logN)을 만족해야 합니다.
// 나머지를 구하는 이유는 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문입니다. 하지만 모든 연산이 끝난 뒤에 그 결과를 94,906,249로 나누려고 해서는 안 됩니다. 연산 중간에도 이 범위를 넘을 수 있기 때문에, 연산을 할 때마다 나머지를 구하고 그 결과에 연산을 이어가시기 바랍니다.
// 입출력 예시
// let output = power(3, 40);
// console.log(output); // --> 19334827

function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  // 2의 10제곱이라고 치면
  // 2의 5제곱 곱하기 2의 5제곱인데
  // 왜 이렇게 반으로 쪼개냐면 빨리할려고 ㅎㅎ
  // 어차피 언제 9ㅕㅕ져4234를 나머지해주는건 언제 하던지 똑같으니까 반나누고나서 해준다
  // 근데 2의 10제곱은 짝수이지만
  // 2의 11제곱이면 반으로 쪼개도 2가 남으니까
  // 그렇게 남을경우에는 남은 2랑 2의 5제곱 짜리 곱한거 리턴하고 아니면 그냥 리턴한다
  if (exponent === 0) {
    return 1;
  }
  let half = parseInt(exponent / 2);
  // 왜 parseInt 해주냐면 소숫점 있을 수도 있으니까 해줘야됨

  let memo = power(base, half);
  let result = (memo * memo) % 94906249;
  if (exponent % 2 === 1) {
    // 또 이게 커질 수 있으니까 나머지를 또 해줘야겠죠 ^^?
    return (base * result) % 94906249;
  } else {
    return result;
  }
}

// 효율적이지 않은 알고리즘 ^^
// function power(base, exponent) {
//    todo: 여기에 코드를 작성합니다.
//   if(exponent === 0){
//     return 1;
//   }

//   return base * power(base, exponent - 1) % 94906249
// }
