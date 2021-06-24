심볼형 - 유일한 식별자
// 유일성이 보장되는 자료형
let id = Symbol("id"); // 심볼 id에 "id"라는 설명을 붙임(생략 가능)

//동일한설명의 심볼을 여러개 만들어도 각 심볼값은 다르다.
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); //false

// 심볼은 문자형으로 자동 형 변환되지 않는다 -> toString()
// 심볼의 설명 -> symbol.decription

=============================================

객체에 심볼프로퍼티를 설정하려면 []대괄호 표기법을 사용
// 객체 리터럴을 사용해 객체를 만든경우, 대괄호를 사용해 심볼형 키 생성
let id2 = Symbol("id");
let user2 = {
  name: "Din",
  // "id2": 123하면 심볼 id2가 아닌 문자 "id2"가 키가 됨
  // id2: 123하면 심볼이 아니고 그냥 id2가 키가 됨
  [id2]: 123
}

for(let key in user2) alert(key); // name만 나옴

//심볼로 접근
alert(user2[id2]);

==================================================

숨김프로퍼티
// 외부에서 가져와 함부로 변경할 수 없는 객체에 독자적으로 보존가능하고 구분할 수 있는 식별자를 붙일 때 사용

let user = {
  name: "John"
};

let id = Symbol("id");
user[id] = 1;
// 심볼을 키로 사용해 데이터에 접근 할 수 있다.
alert(user[id]);

====================================================
//전역 심볼 (Symbol.for())
// 이름이 같은 심볼을 같은 개체를 가르키도록 해야할 경우

// Symbol.for(key) 이름을 사용해서 전역 심볼을 찾음
let id = Symbol.for("id");
let idAgain = Symbol.for("id"); 

alert(id === idAgain);  // true

// Symbol.keyFor(sym) 심볼을 이용해 이름을 찾음
let sym  = Symbol.for("name");
let sym2 = Symbol.for("id");
// 로컬 심볼인 경우
let localSymbol = Symbol("name");

alert(Symbol.keyFor(sym));    //name
alert(Symbol.keyFor(sym2));   // id
alert(Symbol.keyFor(localSymbol)); // undefined
