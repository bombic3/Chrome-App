const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // new Date(); 는 자바스크립트 내부에 있는 함수로 시간과 날짜에 대한 여러 정보가 있다.

  // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  // console.log(시:분:초);

  // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  // new Date().getHours() -> 19
  // String(new Date().getHours()) -> "19"


  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
// setInterval의 시간 이후 실행 되기 때문에 바로 실행이 되도록 적어주는 것
setInterval(getClock, 1000);
// 1초 후 실행하고 1초마다 함수 호출


