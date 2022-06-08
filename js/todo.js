const toDoForm = document.getElementById("todo-form");
// input value 값 받아오기
// const toDoInput = toDoForm.querySelector("input"); 밑에랑 같다
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

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

  // todo 내용 그리기 painToDo호출
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);