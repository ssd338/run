없을 수도 있는 프로퍼티에 접근할때
// 예를 들어 중첩객체 b가 있을때 b에 존재하지 않는 중첩객체에 접근 시

let b = {};
//alert(b.home.addr)  // 에러
// 중첩객체가 아닌경우 '(b.home)'면 에러x undefined나옴.

// 상황 해결1  '&&' 사용
alert(b && b.home && b.home.addr);  // undefined. 에러는 안뜸.

// 해결2 옵셔널체이닝 '?.' 사용
// 앞의 평가 대상이 undefined 나 null이면 평가중단, undefined 반환
alert(b.home?.addr);

// 함수의 옵셔널 체이닝 '?.()'
let user = {
  admin(){
    alert("관리자입니다.");
  }
}

let user2 = {};

user.admin?.();
user2.admin?.();