// 문제
// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴해야 합니다.
// 카이사르 암호(Caesar cipher)는 평문(plaintext)을 암호키 secret개만큼 (오른쪽으로) 평행이동시켜 암호화 합니다. 복호화는 암호화된 문자열을 원래의 평문으로 복원하는 것을 말합니다.

// 'hello'를 secret 3으로 암호화한 경우: 'khoor'
// 'codestates'를 secret 11로 암호화한 경우: 'nzopdelepd'
// 입력
// 인자 1 : str
// string 타입의 알파벳 소문자 문자열
// 인자 2 : secret
// number 타입의 암호화 키
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
// 공백은 그대로 두어야 합니다.
// 입출력 예시
// let output = decryptCaesarCipher('khoor', 3);
// console.log(output); // --> hello

// output = decryptCaesarCipher('zruog', 3);
// console.log(output); // --> world

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
