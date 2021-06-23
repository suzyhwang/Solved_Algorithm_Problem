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
