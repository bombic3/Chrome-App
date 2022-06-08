const toDoForm = document.getElementById("todo-form");
// input value 값 받아오기
// const toDoInput = toDoForm.querySelector("input"); 밑에랑 같다
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
// todoList 목록들 localstoryge에 저장하기
const TODOS_KEY = "toDos";

// 배열 초기값이 비어있어서 현재것만 저장되고 이전것들이 없어짐
// const toDos = [];
// 재정의 되는 let으로 정의하기
let toDos = [];

// storage에 toDos 배열 텍스트로 저장하기
function saveToDos () {
  // localStorage.setItem(TODOS_KEY, toDos);
  // 배열을 텍스트로 바꿔서 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제 함수
function deleteToDo (event) {
  // event에 관한 모든 정보 확인
  console.log(event);
  // button이 있는 해당 부모 li
  console.dir(event.target.parentElement);
  // 우리가 삭제할 li
  const li = event.target.parentElement;
  // li 삭제
  li.remove();
}

// toDo 그리는 함수, 지우기 button 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  // span안에 value값 넣기
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";

  // button 클릭하면 지워지는 기능
  button.addEventListener("click",deleteToDo);

  // li 안에 span 넣기
  li.appendChild(span);
  
  // li 안에 button 넣기
  li.appendChild(button);

  // ul 안에 li 넣기
  toDoList.append(li);
}


// form태그에서 가지는 submit 기본 기능 > 새로고침 되는 것 막아줌
function handleToDoSubmit () {
  event.preventDefault();
  // value 값 비우기 지정 전에 화면에 value 값 띄어주기
  const newTodo = toDoInput.value;
  // console.log(toDoInput.value);
  // 쓰여진값 나옴
  toDoInput.value = "";
  // input에 값이 있어도 newTodo의 값은 영향을 받지 않는다.
  // console.log(newTodo, toDoInput.value);
  // 쓰여진값, " " 띄어쓰기 나옴

    //2. toDos array에 newTodo push 하기
  toDos.push(newTodo);
    //2. 이 배열을 localstorage에 저장하면 되는데 localstorage는 텍스트만 넣을 수 있음

  // todo 내용 그리기 painToDo호출
  paintToDo(newTodo);

    //2. storage에 저장 함수 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//3. array에 있는 각각의 item에 대해 실행할 function
function sayHello (item) {
  console.log("item갯수만큼 실행될걸", item);
}

// storage에 저장한 value 화면에 나타내기
// JSON.parse() => string을 배열로
const savedToDos = localStorage.getItem(TODOS_KEY);

// saveToDos 에 값이 있을 때만 JSON.parse 하겠다
if (saveToDos !== null ) {
  const parsedToDos = JSON.parse(savedToDos);
  console.log(parsedToDos);
  // js로 array에 있는 각각의 item에 대해 function을 실행.
  // array는 각각 function을 갖게해주는 forEach를 갖고 있음
  // parsedToDos.array.forEach(element => {  });
  parsedToDos.forEach(sayHello);

  // 위의 sayHello function 함축 = arrow(화살표) 함수
  // item을 받아서 item 사용
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));

    // 4. 초기값 배열에 전에 있던 toDo 넣어서 복원
  toDos = parsedToDos;

  // 새로고침해도 화면에 list 나타내기
  // 각각의 item들에게 paintToDo 함수 실행
  parsedToDos.forEach(paintToDo);
}