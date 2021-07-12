// 문제
// 문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

// 입력
// 인자 1 : arr
// string 타입을 요소로 갖는 배열
// arr[i].length는 20 이하
// 출력
// 배열을 리턴해야 합니다.
// 주의 사항
// 가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
// 가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.
// 입출력 예시
// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]

function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let short = 20;
  let long = 0;
  let shortIdx;
  let longIdx;

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= short) {
      short = arr[i].length;
      shortIdx = i;
    } else if (arr[i].length >= long) {
      long = arr[i].length;
      longIdx = i;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (shortIdx !== j && longIdx !== j) {
      result.push(arr[j]);
    }
  }

  return result;
}
