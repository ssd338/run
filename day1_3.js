// 객체 메서드
let user = {
  name: "Choo",
  age: 27,
}

user.sayHi = function(){
  alert("Hi");
};

user.sayHi();

// 이미 정의된 함수를 객체의 메서드로 등록

function sayBye(){
  alert("Bye");
};
user.sayBye = sayBye;

user.sayBye();

// 메서드 단축구문
user = {
  home(){ // home: function()과 동일
    alert("go home");
  }
};

user.home();

===========================================
메서드와 this
// 메서드 내부에서 this 키워드를 사용하면 객체에 접근 가능

let user = {
  name: "Choo",
  age: 27,

  sayHi(){
    alert(this.name);
  }
}

user.sayHi();

=================================================
//this가 결정되는 시점은 런타임
let user = {
  name: "Choo",
  age: 27,

  sayHi(){
    alert(this.name);
  }
}

let man = user;
user = null;
man.sayHi();

let member = {name: "ban"};
let admin = { name: "John"};

function sayHi(){
  alert(this.name);
}

member.s = sayHi;
admin.s = sayHi;

member.s();
admin.s();

==================================================
this가 없는 화살표 함수
// 화살표 함수는 고유한 this를 자지지 않는다.
// 화살표 함수에서 this를 사용하면 외부에서 this값을 가져온다

let user = {
  firstName: "보라",
  sayHi(){
    let arrow = () => alert(this.firstName);
    arrow();
  }
}

user.sayHi();