const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// String 두 번 이상 반복시 변수로 만들기
// String으로만 명명하는 변수 이름은 대문자로 쓰는 것이 관례
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// argument 의 이름은 tomato로 해도 괜찮지만 event로 하는 것이 관례
function onLoginSubmit (event) {
  event.preventDefault();
  // .preventdefualt();
  // 어떤 event의 기본행동 발생 금지.
  // form input -> 새로고침 -> 막아줌

  loginForm.classList.add(HIDDEN_CLASSNAME);
  // submit 하면 form 사라짐

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // localStorage 에 DB값 저장

  // greeting.innerText = "Hello" + username;
  // greeting.innerText = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  // 위 에는 반복되는 실행 값
  paintGreetings(username);

  // h1에 작성한 내용 넣어지고 보여짐

}

loginForm.addEventListener("submit", onLoginSubmit);
// form을 submit하면 JS가 function을 호출
// button click이 없어도 form의 submit 이벤트로 value값 호출가능

// 두 번 이상 반복되는 실행은 함수로 만들기
function paintGreetings (username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME)
}


// localStorage에 username이 있으면 form을 가리고
// localStorage에 username이 없으면 form을 나타낸다
// -> (localStorage.getItem(USERNAME_KEY); = null)
const savedUsername = localStorage.getItem(USERNAME_KEY);




// form, h1 둘 다 hidden 클래스 갖고 시작
// localStorage에 값이 없으면
if (savedUsername === null) {
  // show form -> form 보여주고 submit event 실행
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show h1 -> h1에 값 넣고 보여주기
  // 반복되는 실행 값
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
