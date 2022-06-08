const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg"
];
// img 폴더 안의 파일 이름과 똑같이 써주면 됨

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// document.createElement("태그이름") => 태그 생성

bgImage.src = `img/${chosenImage}`;
// img태그의 src 지정

document.body.appendChild(bgImage);
// html body 마지막에 태그 넣기
// document.body.prepend(bgImage);
// html body 첫번째에 태그 넣기
