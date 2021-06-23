//참조에 의한 객체 복사
// 값을 복사하는 것이 아닌 참조주소를 복사
let message = {
  say: "Hello"
}
let phrase = message;

phrase.say = "Hi";
alert(message.say);   //Hi

message.say = "Bye";
alert(phrase.say);  //Bye

/*
let phrase = {
  say: message.say
}
이렇게 하면 프로퍼티의 값을 가지고 복사하는거라서

phrase.say = "Hi";
alert(message.say);   //Hello

message.say = "Bye";
alert(phrase.say);  //Hi
이런 결과가 나옴
*/

// 참조의 의한 복사이므로 객체 비교시 ==과 ===의 결과가 같다
let a = {};
let b = a;

alert(a == b);
alert(a === b);

let c = {};
alert(a == c); //false

