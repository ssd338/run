new 연산자와 생성자 함수
// 유사한 객체를 여러개 만들때 사용
// new와 함께 호출하면 내부에 this가 생성되고, 끝에 this가 반환됨

// 생성자 함수 - 첫글자는 대문자, new연산자 붙여서 실행
function User(name){
  this.name = name;   // this에 저장되고 this는 자동반환
  this.isAdmin = false;
}

let user = new User("Jack");
alert(user.name)

======================================================
// 생성자의 return 문
function NewUser(name, age){
  //this대신에 객체를 반환
  // 여기에 this.name = "choo" 하더라도 this는 무시되고 아래의 return 객체의 name이 반환됨
  return {
    name,
    age,
  }
};
// 아무것도 return하지 않는 경우
function SmallUser(name){
  this.name = name;      // this.name 해봤는데 안됨.(기대한건 this.name;하면 this.name = name 와 같은 동작을 바람)
  return;     // <-- this를 반환함
}
alert(new SmallUser("cat").name);

let NewMan = NewUser("choo", 30);
alert(NewMan.name)

==================================================

// 재사용하지 않을 복합한 객체를 만들경우 익명의 생성자를 사용
// 익명 -> 재사용을 막아서 코드를 캡슐화 할 수 있다.
let admin = new function(){
  this.name = "John";
  this.isAdmin = false;
  // ... 복잡한 설정들
}
====================================================
생성자 내 메소드
// 프로퍼티와 메소드를 가진 객체를 생성

function User(name){
  this.name = name;
  this.sayHi = function(){
    alert("My name is "+ this.name);
  };
}

let john = new User("John");
john.sayHi();