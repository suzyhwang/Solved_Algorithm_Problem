// 변수 가지고 놀기
// 1. admin과 name 이라는 변수를 선언하세요.
// 2. name에 값으로 "John"을 할당해 보세요.
// 3. name의 값을 admin에 복사해 보세요.
// 4. admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
let admin;
let name = "John";
admin = name;
alert(admin);

// 올바른 이름 선택하기
// 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
let ourPlanetName = "Earth";
let currentUserName = "John";

// 간단한 페이지 만들기
// 사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력하는 페이지를 만들어 보세요.

let isName = prompt("이름이 무엇인가요?", "");
alert(`당신의 이름은 ${isName} 이군요!`);

// 전위형과 후위형
// 아래 코드가 실행된 후, 변수 a, b, c, d엔 각각 어떤 값들이 저장될까요?
let a = 1,
  b = 1;

let c = ++a; // ?
let d = b++; // ?

a = 2;
b = 2;
c = 2;
d = 1;

// 할당 후 결과 예측하기
// 아래 코드가 실행되고 난 후, a와 x엔 각각 어떤 값이 저장될까요?
let a = 2;
let x = 1 + (a *= 2);

a = 4;
x = 5;

// 형 변환
/*
"" + 1 + 0 = "10";
"" - 1 + 0 = -1
true + false = 1 
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN //!=======!//
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN; //!=====!//
" \t \n" - 2 = -2 //!====!//
*/
/*
5 > 4 = true;
"apple" > "pineapple" = false;
"2" > "12" //! true //
undefined == null true
undefined === null false;
null == "\n0\n" //! false //
null === +"\n0\n" false;
*/

// 입력받은 숫자의 부호 표시하기
// if..else와 프롬프트 대화상자를 사용해 사용자로부터 숫자 하나를 입력받고,
// 아래 조건에 따라 그 결과를 alert 창에 출력해 보세요.
// 입력받은 숫자가 0보다 큰 경우 1을 출력
// 입력받은 숫자가 0보다 작은 경우 -1을 출력
// 입력받은 숫자가 0인 경우 0을 출력
// (사용자는 항상 숫자를 입력한다고 가정)

let number = prompt("숫자를 입력하세요.", 0);

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}

// 'if'를 '?'로 교체하기
// 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.
let result;

if (a + b < 4) {
  result = "미만";
} else {
  result = "이상";
}

let result = a + b < 4 ? "미만" : "이상";

// 'if...else'를 '?'로 교체하기
// 조건부 연산자 '?'를 사용해 if...else 문이 사용된 아래 코드를 변형해보세요.

let message;

if (login == "직원") {
  message = "안녕하세요.";
} else if (login == "임원") {
  message = "환영합니다.";
} else if (login == "") {
  message = "로그인이 필요합니다.";
} else {
  message = "";
}

let message =
  login == "직원"
    ? "안녕하세요."
    : login == "임원"
    ? "환영합니다."
    : login == ""
    ? "로그인이 필요합니다."
    : "";

// 다음 OR 연산의 결과는 무엇일까요?
alert(null || 2 || undefined);
// 2 출력

// OR 연산자의 피연산자가 alert 라면?
alert(alert(1) || 2 || alert(3));
// 1, 2 출력

// 다음 AND 연산의 결과는 무엇일까요?
alert(1 && null && 2);
// null 출력

// AND 연산자의 피연산자가 alert 라면?
alert(alert(1) && alert(2));
// 1, undefined 출력

// OR AND OR 연산자로 구성된 표현식
alert(null || (2 && 3) || 4);
// 3 출력

// 사이 범위 확인하기
// age가 14세 이상 90세 이하에 속하는지 확인하는 if문을 작성하세요
// "이상과 이하"는 나이 범위에 포함된다는 의미입니다
if (age >= 14 && age <= 90) {
}

// 바깥 범위 확인하기
// age가 14세 이상 90세 이하에 속하지 않는지를 확인하는 if문을 작성하세요.
// 답안은 NOT ! 연산자를 사용한 답안과 사용하지 않은 답안 2가지를 제출해 주세요.
if (!(age >= 14 && age <= 90)) {
}
if (age < 14 || age > 90) {
}

// for 반복문을 이용하여 짝수 출력하기
// for 반복문을 이용하여 2부터 10까지 숫자 중 짝수만을 출력해보세요
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}

// for 반복문을 while 반복문으로 바꾸기
// for 반복문을 while 반복문으로 바꾸되, 동작 방식에는 변화가 없도록 해보세요. 출력 결과도 동일해야 합니다.
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// 사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기
// 사용자가 100보다 큰 숫자를 입력하도록 안내하는 프롬프트 창을 띄워보세요.
//사용자가 조건에 맞지 않은 값을 입력한 경우 반복문을 사용해 동일한 프롬프트 창을 띄워줍시다.
// 사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우,
//혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.
// 사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다.
//숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.

let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요", 0);
} while (num <= 100 && num);

// 소수 출력하기
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) {
    // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert(i); // 소수
}

// "switch"문을 if문으로 변환하기
switch (browser) {
  case "Edge":
    alert("Edge를 사용하고 계시네요!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
    break;

  default:
    alert("현재 페이지가 괜찮아 보이길 바랍니다!");
}

if (browser === "Edge") {
  alert("Edge를 사용하고 계시네요!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
} else {
  alert("현재 페이지가 괜찮아 보이길 바랍니다!");
}

// if문을 switch문으로 변환하기
let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}

let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}

// '?'나 '||'를 사용하여 함수 다시 작성하기
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

//   if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.

//   아래 조건을 충족하는 해답 2개를 작성해야 합니다.

//   물음표 연산자 ?를 사용하여 본문을 작성
//   OR 연산자 ||를 사용하여 본문을 작성

function checkAge(age) {
  age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge(age) {
  return age > 18 || confirm("보호자의 동의를 받으셨나요?");
}

// min(a, b) 함수 만들기
// a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.
// 만든 함수는 아래와 같이 동작해야 합니다.

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

function min(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}

// pow(x,n) 함수 만들기
// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요.
// x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.
// pow(3, 2) = 3 * 3 //= 9
// pow(3, 3) = 3 * 3 * 3 //= 27
// pow(1, 100) = 1 * 1 * ...* 1 //= 1

// 프롬프트 대화상자를 띄워 사용자로부터 x와 n을 입력받고
// pow(x,n)의 반환 값을 보여주는 코드를 작성해 보세요.

// 주의사항: n은 1 이상의 자연수이어야 합니다.
// 이외의 경우엔 자연수를 입력하라는 얼럿 창을 띄워주어야 합니다.

function pow(x, n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * x;
  }
  return result;
}
let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert("자연수를 입력하세요!");
} else {
  alert(pow(x, n));
}

// 화살표 함수로 변경하기
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
);

ask(
  "동의하십니까?",
  () => alert("동의하셨습니다."),
  () => alert("취소 버튼을 누르셨습니다.")
);

// 객체야 안녕?
// 다음 각 동작을 한 줄씩, 코드로 작성해보세요.

// 빈 객체 user를 만듭니다.
let user = {};
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
user["name"] = "John";
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
user.surname = "Smith";
// name의 값을 Pete로 수정해보세요.
user.name = "Pete";
// user에서 프로퍼티 name을 삭제하세요.
delete user.name;

// 객체가 비어있는지 확인하기
// 객체에 프로퍼티가 하나도 없는 경우 true,
//그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
//아래와 같이 동작해야 합니다.
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 프로퍼티 합계 구하기
// 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다면,
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요. sum은 390이어야함
// 주의: salaries가 비어있다면, sum에 0이 저장되어야합니다.
let sum = 0;
for (let key in salaries) {
  sum = sum + salareis[key];
}

// 프로퍼티 값 두 배로 부풀리기
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요/
// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
// multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.
// 힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);

// 수를 입력받아 덧셈하기
// 사용자에게 두 수를 입력받고, 두 수의 합을 출력해주는 스크립트를 작성해보세요.
let a = +prompt("숫자를 알려주세요", "");
let b = +prompt("숫자를 알려주세요", "");

alert(a + b);

// 숫자를 입력할 때까지 반복하기
// 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.
// 반환되는 값은 꼭 숫자형 값이어야 합니다.
// 사용자가 아무 입력도 하지 않거나 '취소’를 누르면 입력받기를 멈추고 null을 반환하세요.

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

// 첫 글자를 대문자로 변경하기
// str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.
ucFirst("john") == "John";
function ucFirst(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}

// 스팸 문자열 걸러내기
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요. 해당 문자열이 없으면 false를 반환하면 됩니다.

function checkSpam(str) {
  let newStr = str.toUpperCase();
  if (newStr.includes("VIAGRA") || newStr.includes("XXX")) {
    return true;
  } else {
    return false;
  }
}

// 문자열 줄이기
// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다.
// 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.
// 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

// 숫자만 추출하기
// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
// 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.
// 실행 결과는 아래와 같아야 합니다.

function extractCurrencyValues(str) {
  let number = "1234567890";
  let result = "";
  for (let i = 0; i < number.length; i++) {
    if (str.includes(number[i])) {
      result = result + number[i];
    }
  }
  return Number(result);
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

// 배열은 복사가 될까요?
let fruits = ["사과", "배", "오렌지"];
// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert(fruits.length); // 4
// 배열은 객체이기 때문에 shoppingCart와 fruits는 모두 같은 배열을 참조합니다.

// 배열과 관련된 연산
// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
// 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);
styles.shift();
styles.unshift("Rap", "Raggae");

// border-left-width를 borderLeftWidth로 변경하기
// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.
// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// 특정 범위에 속하는 요소 찾기
// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.

function filterRange(arr, a, b) {
  let newArr = arr.slice();
  return newArr.filter((el) => el >= a && el <= b);
}

// 특정 범위에 속하는 요소 찾기 (배열 변경하기)
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요.
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b
// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // 범위 밖의 요소를 제거함
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert(arr); // [3, 1]

// 내림차순으로 정렬하기
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

// 배열 복사본을 정렬하기

// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다.
// 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);

// 이름 매핑하기
// name을 나타내는 프로퍼티를 가진 객체 user가 담긴 배열이 있습니다.
// name의 값만 담은 새로운 배열을 만들어주는 코드를 작성해보세요.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

alert(names); // John, Pete, Mary

// 객체 매핑하기
// 세 개의 프로퍼티 name과 surname, id를 가진 객체 user가 담긴 배열이 있습니다.
// name과 surname을 조합해 fullName을 만들고,
// 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해보세요.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith

// 나이를 기준으로 객체 정렬하기
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다.
// 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

// 배열 요소 무작위로 섞기
// 배열의 요소를 무작위로 섞어주는 함수 shuffle(array)을 작성해 보세요.

// shuffle을 여러 번 실행하면 요소의 정렬 순서가 달라야 합니다. 예시를 살펴봅시다.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

// 평균 나이 구하기
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// 평균 나이 구하기
// age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다.
// 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.

// 평균을 구하는 공식은 (age1 + age2 + ... + ageN) / N 입니다.

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// 중복 없는 요소 찾아내기
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

// Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age... }.

// Create a function groupById(arr) that creates an object from it,
// with id as the key, and array items as values.

function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

// 자식 DOM
// 아래 페이지를 살펴봅시다.
<html>
  <body>
    <div>사용자:</div>
    <ul>
      <li>John</li>
      <li>Pete</li>
    </ul>
  </body>
</html>;
