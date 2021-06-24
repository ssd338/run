// 객체

let name = "choo"
let woman = {
  name,   // name: name과 같음 -> let name이 없다면 에러
  age: 27
};

// 대괄호 표기법

let fruit = prompt("과일이름","name");
let bag = {
  [fruit]: fruit,
};

alert(bag.수박);
alert(bag[fruit]);
alert(bag["fruit"]);  // undefined
alert(bag.fruit);  // undefined

==============================
문자나 심벌형이 아닌 값은 자동으로 문자형이됨

let obj = {
  0: "test",
};

//alert(obj[0]);
//alert(obj.0);  // 에러
//alert(obj."0")  // 에러

let num = "0";
alert(obj["num"]); //undefined
alert(obj[num]); // test

===============================
객체의 프로퍼티 확인

<< in >>
let obj = {
  0: "test",
};

alert("0" in obj)
alert(0 in obj)

let num = "0";

alert(num in obj);  // num에 들어있는 "0"을 가지고 대조 - true
alert("num" in obj); // false

<< undefined >>
if(obj["smile"] === undefined){
  alert("하하")
}
// obj.smile 하면 에러

객체프로퍼티 모두 조회
let user = {
  name: "Choo",
  age: 27,
  isAdmin: true,
};

for (let key in user) {
  alert(key);
  alert(user[key]);
};
====================================


