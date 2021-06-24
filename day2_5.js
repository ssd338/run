[ 숫자 자료형 ]

// e -> 0의 갯수 ex) 1e9 == 10억/ 7.3e9 == 73억
// 소수점 e- ex) 1e-6 == 0.000001

// 16진수 -> 색, 인코딩등에 사용
// 0x로 표현 ex) 0xFF = 255

// number.toString(base)
// -> base진법으로 number를 표현 후 문자형으로 변환해서 반환
let num = 255;
alert(num.toString(16));  //ff
alert(num.toString(2));   // 11111111

==============================================

어림수 구하기
Math.floor // 소수점 첫째자리에서 내림
Math.ceil // 소수점 첫째 자리에서 올림
Math.round // 소수점 첫째 자리에서 반올림
Math.trunc // (윈도우 익스플로러에서 지원안됨) 소수점 무시

// 응용
let num = 1.23456;
alert(Math.floor(num * 100) / 100) //1.23
