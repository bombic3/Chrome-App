// 명언 10개 명언,작가로 배열 준비
const quotes = [
  {
    quote: "Don't dwell on the past.",
    author: "Life",
  },
  {
    quote: "Believe in yourself.",
    author: "Life",
  },
  {
    quote: "Follow your heart.",
    author: "Life",
  },
  {
    quote: "Seize the day.",
    author: "Life",
  },
  {
    quote: "You only live once.",
    author: "Life",
  },
  {
    quote: "Past is just past.",
    author: "Life",
  },
  {
    quote: "Love yourself.",
    author: "Life",
  },
  {
    quote: "Where there is a will there is a way.",
    author: "Angela MerKel",
  },
  {
    quote: "Don't beat yourself up.",
    author: "Life",
  },
  {
    quote: "Life is a journey.",
    author: "Ralph Waldo Emerson",
  }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);

// 명언과 작가 한 화면에 보이게 하기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

// Math.random();
// 0~1 사이의 랜덤한 숫자 출력
// 0.44556346
// 0.81295875
// 0.16349838

// Math.random() * 10 -> 0에서 9까지의 수 랜덤으로 고름
// 4.~

// 꼬리 없애기 위한 방법 3가지
// 1. Math.round() - 반올림,내림
// Math.round(1.1) -> 1
// Math.round(1.7) -> 2

// 2. Math.ceil() -> 무조건 올림
// Math.ceil(1.1) -> 2

// 3. Math.floor() -> 마루(floor)까지 숫자 내리기(꼬리끊기)
// Math.floor(1.9) -> 1

// 0~9사이의 숫자 랜덤으로 뽑기
// Math.floor(Math.random() * 10)

console.log(Math.floor(Math.random() * 10));


