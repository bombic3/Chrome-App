
// user의 위치를 주는 함수 navigator와 geolocation 사용하여 날짜 나타내기
// navigator.geolocation.getCurrentPosition(실행될함수,에러날시실행될함수)
// https://openweathermap.org -> 위도경도(숫자)를 장소로 바꾸기, 회원가입, 로그인
// https://api.openweathermap.org/data/2.5/weather?lat={**lat**}&lon={**lon**}&appid=**{API key}**
// → lat(위도) 과 lon(경도) 넣어주기, 내 프로필에 있는 API key 넣어주기
// &units=metric 온도를 섭씨로 나타내줌



// 실행될 함수
function onGeoOk (position) {
  // GeolocationPosition 누르면 상세한 정보 확인 가능(좌표,위도,경도 같은 것들)
  // console.log(position);
  
  // 위도
  const lat = position.coords.latitude;
  
  // 경도
  const lon = position.coords.longitude;
  // console.log("You live in", lat, lon);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // console.log(url);

  // url 에 갈 필요 없이 JavaScript가 url를 부르도록 fetch 사용
  // fetch(url);
  // -> 검사창의 Network 가보면 url를 받아온것을 볼 수 있음
  // fetch는 promise 이기 때문에 then을 써줌(자세한 설명은 백엔드강의)
  // data.name = 위치
  // data.weather[0].main = 날씨
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // console.log(data.name, data.weather[0].main)
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}

// 에러시(유저의 위치를 찾을 수 없을 시) 실행될 함수
function onGeoError () {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);