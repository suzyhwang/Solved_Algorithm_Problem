// 문제
// 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 (숫자와 공백을 제외한 나머지) 문자열의 길이로 나눈 값을 정수로 반올림하여 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열
// 출력
// number 타입을 리턴해야 합니다 (0 이상의 정수)
// 주의 사항
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
// 숫자(digit)는 연속해서 등장하지 않습니다.
// 입출력 예시
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2
// 힌트
// 주어진 문자(길이 1의 문자열)이 숫자(digit)인지 판단하는 방법은 여러 가지 입니다.
// 그 중 하나는 해당 문자가 숫자들의 집합(문자열 또는 배열)에 속하는 지를 판단하는 것입니다.
// 이와 관련해서 js includes를 검색해 봅니다.

function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 문자열을 입력받아 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 숫자와 공백을 제외한 나머지
  // 문자열의 길이로 나눈 값을 정수로 반올ㄹ림하여 리턴해야 합니다
  // 객체에 숫자 찾아서 넣어서 더해주고
  // 숫자랑 공백 제외한 문자열의 길이를 카운트해서 객체에 넣어준다음에
  // 그 둘을 나눠서 반올림한것 리턴
  let obj = { number: 0, length: 0 };
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      obj["number"] = Number(obj["number"]) + Number(str[i]);
    } else if (str[i] !== " " && isNaN(Number(str[i]))) {
      obj["length"]++;
    }
  }
  if (str.length === 0) {
    return 0;
  }
  return Math.round(obj["number"] / obj["length"]);
}
