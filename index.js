// this가 없는 화살표 함수
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