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

let isName = prompt('이름이 무엇인가요?', '');
alert(`당신의 이름은 ${isName} 이군요!`);

// 전위형과 후위형
// 아래 코드가 실행된 후, 변수 a, b, c, d엔 각각 어떤 값들이 저장될까요?
let a = 1, b = 1;

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

let number = prompt('숫자를 입력하세요.', 0);

if (number > 0){
    alert(1);
}else if(number < 0){
    alert(-1);
} else {
    alert(0);
}

// 'if'를 '?'로 교체하기
// 조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.
let result;

if (a + b < 4){
    result = '미만';
} else {
    result = '이상';
}

let result = (a + b < 4) ? '미만' : '이상';

// 'if...else'를 '?'로 교체하기
// 조건부 연산자 '?'를 사용해 if...else 문이 사용된 아래 코드를 변형해보세요.

let message;

if (login == '직원'){
    message = '안녕하세요.';
} else if (login == '임원'){
    message = '환영합니다.';
} else if (login == ''){
    message = '로그인이 필요합니다.'
} else {
    message = '';
}

let message = (login == '직원') ? '안녕하세요.' :
              (login == '임원') ? '환영합니다.' :
              (login == '') ? '로그인이 필요합니다.' : '';

// 다음 OR 연산의 결과는 무엇일까요?
alert( null || 2 || undefined ); // 2

// OR 연산자의 피연산자가 alert 라면?
alert( alert(1) || 2 || alert(3) ); 
// 1, 2 출력


