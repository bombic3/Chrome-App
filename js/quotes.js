// 명언 10개 명언,작가로 배열 준비
const quotes = [
  {
    quote: "Life is either a great adventure or nothing.",
    author: " - Helen Keller",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: " - Benjamin Franklin",
  },
  {
    quote: "Try not to become a man of success but rather try to become a man of value.",
    author: " - Albert Einstein",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: " - Thomas Jefferson",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: " - Estee Lauder",
  },
  {
    quote: "Success is going from failure to failure without a loss of enthusiasm.",
    author: " - Winston Churchill",
  },
  {
    quote: "The only thing worse than starting something and failing … is not starting something.",
    author: " - Seth Godin",
  },
  {
    quote: "Where there is a will there is a way.",
    author: " - Angela MerKel",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: " - Michael John Bobak",
  },
  {
    quote: "Life is a journey.",
    author: " - Ralph Waldo Emerson",
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


