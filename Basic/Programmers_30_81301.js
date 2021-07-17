// https://programmers.co.kr/learn/courses/30/lessons/81301
// 숫자 문자열과 영단어
// 문제 설명

// 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

// 숫자	영단어
// 0	zero
// 1	one
// 2	two
// 3	three
// 4	four
// 5	five
// 6	six
// 7	seven
// 8	eight
// 9	nine
// 제한사항
// 1 ≤ s의 길이 ≤ 50
// s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
// return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.

function solution(s) {
  // p.replace('dog','monkey') -> 문자열 내의 첫번째 'dog'가 'monkey'로 바뀜
  // const regrex = /dog/i; <- i는 ignore의 약자로, 첫번째 'dog'만 바꾸고
  // /dog/g <- g는 global의 약자로 문자열 내의 모든 'dog'를 바꾼다

  let a = s.replace(/zero/g, "0");
  a = a.replace(/one/g, "1");
  a = a.replace(/two/g, "2");
  a = a.replace(/three/g, "3");
  a = a.replace(/four/g, "4");
  a = a.replace(/five/g, "5");
  a = a.replace(/six/g, "6");
  a = a.replace(/seven/g, "7");
  a = a.replace(/eight/g, "8");
  a = a.replace(/nine/g, "9");

  return Number(a);
}
