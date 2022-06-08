const toDoForm = document.getElementById("todo-form");
// input value 값 받아오기
// const toDoInput = toDoForm.querySelector("input"); 밑에랑 같다
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// toDo 그리는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  // span안에 value값 넣기
  span.innerText = newTodo;
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

  // todo 내용 그리기 painToDo호출
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);