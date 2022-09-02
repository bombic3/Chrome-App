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
   // console.log(event);

   // button이 있는 해당 부모 li
   // console.dir(event.target.parentElement);

   // 우리가 삭제할 li
   const li = event.target.parentElement;

   // li 삭제
   li.remove();

       //5. 기존배열 건드리지 x 삭제할 id(li) 제외하고 새로운 toDos 배열생성 filter() 사용
       // toDos = toDos.filter((toDo) => toDo.id !== li.id);
   // parseInt. => 문자열을 숫자로 바꿔줌. li.id가 문자이므로 '숫자 !== 문자' 이므로 숫자화 시켜줘야 함
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

       //5. 지운뒤에 saveToDos 한 번더 불러줘야 함(storage에 저장 함수 호출)
   saveToDos();
 }

 // toDo 그리는 함수, 지우기 button 추가
 function paintToDo(newTodo) {
   const li = document.createElement("li");
       //5. Date.now()로 준 id html에 사용
   li.id = newTodo.id;
   const span = document.createElement("span");
   // span안에 value값 넣기
   // span.innerText = newTodo;

       //5. 오브젝트를 화면에 띄우기 위해 .text를 붙임
   span.innerText = newTodo.text;

   const button = document.createElement("button");
   button.innerText = "❌";
  // button 클릭하면 지워지는 기능
  button.addEventListener("click",deleteToDo);
  // li 안에 span 넣기
  li.appendChild(span);
  
  // li 안에 button 넣기
   li.appendChild(button);

   // ul 안에 li 넣기
   toDoList.appendChild(li);
 }


 // form태그에서 가지는 submit 기본 기능 > 새로고침 되는 것 막아줌
 function handleToDoSubmit (event) {
   event.preventDefault();
   // value 값 비우기 지정 전에 화면에 value 값 띄어주기
   const newTodo = toDoInput.value;
  // console.log(toDoInput.value);
  // 쓰여진값 나옴
  toDoInput.value = "";
  // input에 값이 있어도 newTodo의 값은 영향을 받지 않는다.
   // console.log(newTodo, toDoInput.value);
   // 쓰여진값, " " 띄어쓰기 나옴

       //5. 배열안의 값을 하나의 object로 설정하여 랜덤 id 부여(Date.now() => 1000분의 1초)
   const newTodoObj = {
     text: newTodo,
     id: Date.now(),
   }

     //2. toDos array에 newTodo push 하기
     //2. 이 배열을 localstorage에 저장하면 되는데 localstorage는 텍스트만 넣을 수 있음
   // toDos.push(newTodo);

       //5. newTodoObj를 텍스트가 아닌 오브젝트 push
   toDos.push(newTodoObj);

   // todo 내용 그리기 painToDo호출
   // paintToDo(newTodo);

       //5. 오브젝트를 띄우기 -> 텍스트인 paintToDo 함수 오브젝트로 쓸 수 있도록 변경
   paintToDo(newTodoObj);

     //2. storage에 저장 함수 호출
   saveToDos();
}
 toDoForm.addEventListener("submit", handleToDoSubmit);

 //3. array에 있는 각각의 item에 대해 실행할 function
 // function sayHello (item) {
 //   console.log("item갯수만큼 실행될걸", item);
 // }

 // storage에 저장한 value 화면에 나타내기
 // JSON.parse() => string을 배열로
const savedToDos = localStorage.getItem(TODOS_KEY);
 // saveToDos 에 값이 있을 때만 JSON.parse 하겠다
 if (saveToDos !== null ) {
   const parsedToDos = JSON.parse(savedToDos);
   // console.log(parsedToDos);
   // js로 array에 있는 각각의 item에 대해 function을 실행.
   // array는 각각 function을 갖게해주는 forEach를 갖고 있음
   // parsedToDos.array.forEach(element => {  });
   // parsedToDos.forEach(sayHello);

       // 4. 초기값 배열에 전에 있던 toDo 넣어서 복원
   toDos = parsedToDos;

   // 위의 sayHello function 함축 = arrow(화살표) 함수
   // item을 받아서 item 사용
   // parsedToDos.forEach((item) => console.log("this is the turn of ", item));

   // 새로고침해도 화면에 list 나타내기
   // 각각의 item(object)들에게 paintToDo 함수 실행
   parsedToDos.forEach(paintToDo);
 }

 // 기존 배열에서 item을 지우는게 아니라 기존 array는 그대로 있고 item를 제외한 새로운 array 생성
 // filter() 사용

 // filter(함수) -> 함수가 ture 리턴한 것만 생성

 // filter() 예시
 function sexyFilter () {
   return true;
 }
 console.log([1, 2, 3, 4, 5].filter(sexyFilter));
 // (5) [1, 2, 3, 4, 5]

 function sexyFilterX () {
   return false;
 }
 console.log([1, 2, 3, 4, 5].filter(sexyFilterX));
 // []

 // item이 3이 아니다 => true === 3을 제외하고 true를 리턴하는 함수
 function sexyFilterThreeX (item) {
   return item !== 3;
 }
 console.log([1, 2, 3, 4, 5].filter(sexyFilterThreeX));
 // (4) [1, 2, 4, 5]

 // filter() 예시2
 const arr = ["pizza", "banana", "tomato"];
 function sexyFilterFood (food) {
   return food !== "banana";
 }
 const ex = arr.filter(sexyFilterFood);
 console.log(ex);
 // (2) ['pizza', 'tomato']

 // filter() 예시3
 const arrr = [1234, 5454, 223, 122, 45, 6775, 334];
 // function sexyFilterNum (potato) {
 //   return potato <= 1000
 // }
 const exx = arrr.filter(potato => potato <= 1000);
 console.log(exx);
 // (4) [223, 122, 45, 334]
 // true인 값만 나옴






/*
// 삭제 함수
function deleteToDo (event) {
  // event에 관한 모든 정보 확인
  // console.log(event);

  // button이 있는 해당 부모 li
  // console.dir(event.target.parentElement);

  // 우리가 삭제할 li
  const li = event.target.parentElement;
  
  // li 삭제
  li.remove();

      //5. 기존배열 건드리지 x 삭제할 id(li) 제외하고 새로운 toDos 배열생성 filter() 사용
      // toDos = toDos.filter((toDo) => toDo.id !== li.id);
  // parseInt. => 문자열을 숫자로 바꿔줌. li.id가 문자이므로 '숫자 !== 문자' 이므로 숫자화 시켜줘야 함
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

      //5. 지운뒤에 saveToDos 한 번더 불러줘야 함(storage에 저장 함수 호출)
  saveToDos();
}

// toDo 그리는 함수, 지우기 button 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
      //5. Date.now()로 준 id html에 사용
  li.id = newTodo.id;
  const span = document.createElement("span");
  // span안에 value값 넣기
  // span.innerText = newTodo;
  
      //5. 오브젝트를 화면에 띄우기 위해 .text를 붙임
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";

  // button 클릭하면 지워지는 기능
  button.addEventListener("click",deleteToDo);

  // li 안에 span 넣기
  li.appendChild(span);
  
  // li 안에 button 넣기
  li.appendChild(button);

  // ul 안에 li 넣기
  toDoList.appendChild(li);
}


// form태그에서 가지는 submit 기본 기능 > 새로고침 되는 것 막아줌
function handleToDoSubmit (event) {
  event.preventDefault();
  // value 값 비우기 지정 전에 화면에 value 값 띄어주기
  const newTodo = toDoInput.value;
  // console.log(toDoInput.value);
  // 쓰여진값 나옴
  toDoInput.value = "";
  // input에 값이 있어도 newTodo의 값은 영향을 받지 않는다.
  // console.log(newTodo, toDoInput.value);
  // 쓰여진값, " " 띄어쓰기 나옴

      //5. 배열안의 값을 하나의 object로 설정하여 랜덤 id 부여(Date.now() => 1000분의 1초)
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

    //2. toDos array에 newTodo push 하기
    //2. 이 배열을 localstorage에 저장하면 되는데 localstorage는 텍스트만 넣을 수 있음
  // toDos.push(newTodo);

      //5. newTodoObj를 텍스트가 아닌 오브젝트 push
  toDos.push(newTodoObj);

  // todo 내용 그리기 painToDo호출
  // paintToDo(newTodo);
  
      //5. 오브젝트를 띄우기 -> 텍스트인 paintToDo 함수 오브젝트로 쓸 수 있도록 변경
  paintToDo(newTodoObj);

    //2. storage에 저장 함수 호출
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//3. array에 있는 각각의 item에 대해 실행할 function
// function sayHello (item) {
//   console.log("item갯수만큼 실행될걸", item);
// }

// storage에 저장한 value 화면에 나타내기
// JSON.parse() => string을 배열로
const savedToDos = localStorage.getItem(TODOS_KEY);

// saveToDos 에 값이 있을 때만 JSON.parse 하겠다
if (saveToDos !== null ) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // js로 array에 있는 각각의 item에 대해 function을 실행.
  // array는 각각 function을 갖게해주는 forEach를 갖고 있음
  // parsedToDos.array.forEach(element => {  });
  // parsedToDos.forEach(sayHello);

      // 4. 초기값 배열에 전에 있던 toDo 넣어서 복원
  toDos = parsedToDos;

  // 위의 sayHello function 함축 = arrow(화살표) 함수
  // item을 받아서 item 사용
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));

  // 새로고침해도 화면에 list 나타내기
  // 각각의 item(object)들에게 paintToDo 함수 실행
  parsedToDos.forEach(paintToDo);
}

// 기존 배열에서 item을 지우는게 아니라 기존 array는 그대로 있고 item를 제외한 새로운 array 생성
// filter() 사용

// filter(함수) -> 함수가 ture 리턴한 것만 생성

// filter() 예시
function sexyFilter () {
  return true;
}
console.log([1, 2, 3, 4, 5].filter(sexyFilter));
// (5) [1, 2, 3, 4, 5]

function sexyFilterX () {
  return false;
}
console.log([1, 2, 3, 4, 5].filter(sexyFilterX));
// []

// item이 3이 아니다 => true === 3을 제외하고 true를 리턴하는 함수
function sexyFilterThreeX (item) {
  return item !== 3;
}
console.log([1, 2, 3, 4, 5].filter(sexyFilterThreeX));
// (4) [1, 2, 4, 5]

// filter() 예시2
const arr = ["pizza", "banana", "tomato"];
function sexyFilterFood (food) {
  return food !== "banana";
}
const ex = arr.filter(sexyFilterFood);
console.log(ex);
// (2) ['pizza', 'tomato']

// filter() 예시3
const arrr = [1234, 5454, 223, 122, 45, 6775, 334];
// function sexyFilterNum (potato) {
//   return potato <= 1000
// }
const exx = arrr.filter(potato => potato <= 1000);
console.log(exx);
// (4) [223, 122, 45, 334]
// true인 값만 나옴


*/
