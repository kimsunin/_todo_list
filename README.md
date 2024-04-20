# momentum

바닐라 js로 크롬 앱 만들기

---

# javascript 기본문법

## 12/26

### Variables

- const : 상수, 이후에 바꿀 수 없다
- let : 변수를 바꾸고 싶을때, update할 때 사용
- var : 어떤 규칙도 갖고 있지 않는다.

### Booleans

- true 타입
- false 타입
- null 타입 (파이썬에서는 None)
- undefined 타입

```js
const run = true;
const opt = false;
```

### Arrays

- [ ]안에 어떤 타입이든 쓸 수 있다.
- array.push()

```js
const array = [1,2,"hello",false,null,undefined];
console.log(array[2]); // hello가 출력
array.push(4) - array에 4 추가하기
```

### Objects

- { } 안에 property와 value 적기
- value로 array도 들어갈 수 있음

```js
const player  {
    name : "changmin",
    age : 3,
    habit : ['basketball','game'],
}
console.log(player.habit[0])
player.lastname="Han" //object에 property추가가능
player.age += 1 // value update 가능
```

### Function

- 인자를 안받은채로 인자를 출력하면 undefined, NaN(not a Number)가 출력

```js
function sayHello(name, age) {
  console.log("Hello " + name + " Your age is " + age);
}
sayHello("Changmin");
//출력할때 age가 없으면 age자리에 undefined가 들어간다
//Hello Changmin Your age is undefined
```

- Object안에 function을 만들수 있다.
- Object안에 function 인자로 안전달해도 Object의 property는 사용가능
- 그냥 name이라고 하면 안된다.

```js
const player={
    name: "changmin"
    sayHello: function(){
        console.log("Hello" + player.name);
    }
}
palyer.sayHello();
```

// 추가로 더 공부하면 좋을 것 : arrow function

### Return

- function에 return (C언어랑 똑같다)
-

```js
function plus(a, b) {
  return a + b;
}
const result = plus(10, 2);

console.log(result);
```

- 계산기 예제(Object와 function 사용)

```js
const calculater = {
  plus: function (a, b) {
    return a + b;
  },
  devide: function (a, b) {
    return a / b;
  },
  minus: function (a, b) {
    return a - b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
console.log(calculater.plus(1, 6));
```

## 12/27

### Conditional

- prompt() : 사용자의 입력받아 string타입으로 return, 하지만 입력전까지 브라우저가 멈추고 css적용불가해서 잘 안쓴다
- typeof &lt;variable &gt; : variable의 타입을 return, typeof( ) <---- 이렇게 안쓴다
- parseInt() : string형을 int형으로 변환해줌
- isNaN() : 숫자인지 아닌지 판단해줌 true라면 숫자아님, false라면 숫자
- === : 같다
- !-- : 다르다
- && : AND조건
- || : OR조건

```js
const age = parseInt(prompt("How old are you"));
console.log(typeof age);

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("Your are too young");
} else {
  console.log("Thank you for writing your age");
}
```

---

# 브라우저와 javascript

### Document Object

- 이미 존재하는 객체, 연결된 html 객체를 가리킴
- 브라우저가 html정보를 document라는 object으로 자바스크립트에게 전달
- 자바스크립트 관점으로 보는 html 정보들이 담긴 객체

```js
console.dir(document); // element의 내부를 보여준다.
document.body; //html의 body부분만
document.title = "Change Title"; // html title 바꾸기
```

## 12/28

### document.getElementById()

- document객체와 element를 가져오는 수많은 함수를 이용하자
- 자바스크립트에서 html을 객체로 가져올수도있고 값을 바꿀 수도 있다.
- 자바스크립트에서 html을 가져오는 다른 방법도 있다.

```js
const title = document.getElementById("id name");
console.dir(title);
console.log(title.className);

title.innerText = "Change!!";
```

### 이외에 함수들

- getElementByClassName : 많은 element를 한번에 가져와야할때 사용, array를 리턴
  (대부분 classname을 여러곳에 만들지 않는다)
- getElementByTagName : anchor,div,section,button 같은 tag의 name으로 element가져오기, array로 가져옴

```js
const title = document.getElementsByTagName("h1");
```

### querySelector

- element를 CSS방식으로 불러오기, 가장 추천하는 방식
- querySelector : 한개를 return해준다. 조건에 맞는 여러개가 있다면 그중 첫번째것만 return해준다.
  ex) document.querySelector("div.hello:firstchild h1")
- querySelectorAll : 조건에 맞는 여러개를 array형식으로 return해준다.

```js
//hello class에서 h1태그를 가져오기
const title = document.querySelector(".hello h1");
const title = document.querySelector("div h1");

//위, 아래가 같은 이야기이다.
const title = document.querySelector("#hello");
const title = document.getElementById("hello");
const title = document.querySelector("div.hello:first-child h1");
//class hello를 가진 div 내부의 first-child인 h1를 찾는것
```

### 간단한 css

- "#" - id를 의미
- "." - class를 의미

### Events

- style은 h1 객체 내부에 있는 하나의 객체이다. (javascript형식으로 된)
- 그안에 color가 있다.

```js
title.style.color = "blue";
//이러면 h1의 style을 javascript에서 변경할 수 있다.
```

- 대부분은 javascript에서 event를 listen 한다.(event는 클릭,키보드 등)

```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);
//title을 click하는 것을 listen하고 click되면 함수가 작동한다.
```

## 12/31

### Events 2

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
- 해당사이트에서 html의 event들을 확인해볼 수 있다.
- console.dir(title) 와 같이 h1의 element들을 보고 "on"이 붙여져 있으면 event이다.

```js
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

### more Events

- event를 사용하는 다른 방법(비추)
- .addEventListener 방법으로는 .removeEventListener로 event listener를 제거할 수 있다.

```js
title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
```

- window도 자바스크립트에서 제공하는 객체이다. (document같은 거)
- window도 event가 있다.

```js
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
```

- document의 body,head,title은 바로 가져올 수 있다

```js
document.body;
document.head;
document.title;
```

- div,h1 같은 element들은 getElementById,querySelector로 가져와야됨
- 다른 window의 event들 (resize, copy, offline,online)

### CSS in Javascript

- 조건문을 활용해 css를 바꿔보자

```js
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor; //let은 변수값을 변경시킬 수 있으니까
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);
```

## 1/2

### CSS in Javascript 2

- javascript가 html을 변경하고, css는 html을 바라보고있다.
- javascript로 태그에 class를 변경해주고 이미 css에 class에 대한 설정값이 있어서 변경되는것처럼 확인할 수 있다.

```css
h1 {
  color: cornflowerblue;
}

.active {
  color: tomato;
}
```

```js
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
```

- 위에 방법으로는 원래의 className을 기억못하고 바뀌어버린다.
- className 을 바꾸는 다른방법 --> classList

### classList

- classList는 class들의 목록으로 작업할 수 있게 허용
- 참고사이트 : https://developer.mozilla.org/ko/docs/Web/API/DOMTokenList
- .contains() : HTML element의 class에 포함되어있는지 말해준다.
- .remove() : classList에 class 제거
- .add() : classList에 class 추가

```js
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
```

- .toggle() : 해당 class가 있으면 삭제, 없으면 추가해줌, 위에랑 똑같이 작동하는 코드

```js
function handleTitleClick() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}
```

---

# Login

### input values

```html
<body>
  <div id="login-form">
    <input type="text" placeholder="What is your name?" />
    <button>Log In</button>
  </div>
  <script src="app.js"></script>
</body>
```

```js
//const loginForm = document.querySelector("#login-form");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
//const loginInput = document.querySelector("#login-form input")
const loginButton = loginForm.querySelector("button");

function handleLoginBtmClick() {
  console.dir(loginInput); //이걸로 입력한게 무슨 변수명으로 들어오는지 확인가능
  console.log("hello", loginInput.value);
}

loginButton.addEventListener("click", handleLoginBtmClick);
```

### check Username

- input에 유효한 username이 들어오는지 확인
- js에서 if문으로 유효성검사를 할수있다.

```js
function handleLoginBtmClick() {
  const username = loginInput.value;
  if (username === "") {
    console.log("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  } else {
    console.log("hello", username);
  }
}
```

- html에서도 할 수 있다. 이방법을 쓸땐 input이 form안에 있어야된다.
- form안에 넣었을때 enter나 click하면 form이 전송되고 페이지가 새로고침된다.

```html
<body>
  <form id="login-form">
    <input
      required
      maxlength="15"
      type="text"
      placeholder="What is your name?"
    />
    <button>Log In</button>
  </form>
  <script src="app.js"></script>
</body>
```

### Event 1

- submit 이벤트가 발생해서 onLoginSubmit함수를 실행시킬때 submit이벤트에서 발생한 정보를 인자로 onLoginSubmit함수를 실행한다.
- 모든 eventListener fucntion의 첫번째 argument는 항상 event에 대한 정보들을 제공한다.

```js
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(loginInput.value);
}
```

## 1/4

### Event 2

- 링크를 통해 이동하는 브라우저의 기본동작을 막아본다.
- js가 handle함수를 실행시킬때 event에 대한 정보가 담긴 object를 인자로 넘겨준다.

```html
<a href="https://nomadcoders.co">Go to courses</a>>
```

```js
function handleLinkClick() {
  alert("Click!");
}
link.addEventListener("click", handleLinkClick);
```

### getting username

- form에 username을 입력하면 form을 숨기고 hello username을 출력해준다.
- css를 통해 로그인후에는 로그인 form을 안보이게 할 수 있다.
- hidden class를 주면 안보이게된다.
- string 합치는 다른방법 : 백틱이용 `${변수명}` ex) `Hello ${username}

```css
.hidden {
  display: none;
}
```

```js
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}
```

### Saving username

- 참고자료 : https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- 브라우저를 새로고침에도 username을 기억하도록 하는것이 목표
- localStorage api를 이용
- localStorage.setItem("key","value") : localstorage에 저장
- localStorage.getItem("key") : key에 대한 value를 가져온다
- localStorage.removeItem("key") : 삭제한다.

```js
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

### Loading username

- username이 localStorage에 있는지 확인하고 있으면 form안보여주기
- 없으면 form으로 username 입력을 진행

```js
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //greeting.innerText = "Hello " + username;
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
```

---

# Clock

### Intervals

- intervals : 매번 일어나야 하는 무언가 ex) 매 2초
- setInterval(함수, 초) : 몇 초마다 함수가 호출된다.(초는 ms단위)

```js
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
```

### Timeout and Date Object

- timeout : 바로 실행되지 않고 몇 초 뒤에 실행되기 하는것
- setTimeout(함수, ms초)

```js
function sayHello() {
  console.log("hello");
}
setTimeout(sayHello, 5000);
```

- Date는 자바스크립트가 가지고 있는 object이다.
- Date.getDate(), Date.getDay(), Date.getFullYear(), Date.getHours(), Date.getMinutes()

```html
<h2 id="clock">00:00:00</h2>
```

```js
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}
getClock(); //웹사이트 로딩 후 1초뒤 실행이 아니라 바로 실행되도록
setInterval(getClock, 1000);
```

### PadStart

- 0초라고 안나오고 00초로 나오도록 text formatting.
- padStart() : 설정한 length보다 작으면 앞에 설정한 문자열을 padding해준다.
- padEnd() : length보다 작으면 뒤에 문자열을 padding해준다.
- Date.getHours() 을 하면 number 타입이니까 string으로 바꿔준 후에 padStart를 해줘야한다.

```js
"1".padStart(2, "0"); // 01로 나옴
"1".padEnd(2, "0"); // 10으로 나옴
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
```

---

# Quotes and BackGround

### Quotes

- 인용구에서 랜던한 Index를 보여주기 위해 Math 모듈사용(js에서 이미 load됨)
- Math.random() : 0~1사이에 랜덤한 숫자제공
- Math.round() : 소수점 반올림
- Math.ceil : 올림
- Math.floor : 내림

```html
<div id="quote">
  <span></span>
  <span></span>
</div>
```

```js
const quoes = [];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
```

### background

- js에서 만들어서 html에 추가하기
- document.createElement() : html요소 만들기
- document.body.appendChild() : 만든요소를 body 맨끝에 붙이기
- document.body.prepend(): 만든요소를 body 맨앞에 붙이기

```js
const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html 코드만들기

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body에 추가하기
```

<<<<<<< HEAD

---

# Todo

### setup

```html
<form id="todo-form">
  <input type="text" placeholder="Write a To Do and Press Enter" required />
</form>
<ul id="todo-list"></ul>
```

```js
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintTodo(newTodo);
  savedTodo();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
```

## 1/11

### Adding todos

```js
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";

  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}
```

### Deleting Todo

- event.target.parentElement에 event가 발생한 부모요소를 찾을 수 있다.
- event.target.parentElement를 통해 x버튼을 누르면 x버튼에 속한 li를 삭제한다.

```js
function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}
```

### Saving Todos

- 입략하면 local.storage에 저장하고 새로고침했을 때 local.storage에 저장된것을 불러와 list로 보여준다.
- JSON.stringify(): js object나 array 등 어떤 것이든 string으로 바꿔주는 기능

```js
const player ={name :"changmin};
JSON.stringify(player);
```

"df","df"

```js
function savedTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
```

### Loading Todos

- JSON.stringify() : js object를 string으로 변환
- JSON.parse() :string을 js Objcet으로 변환

```js
JSON.stringify([1, 2, 3, 4]);
// "[1,2,3,4]"
JSON.parse("[1,2,3,4]");
//[1,2,3,4]
```

- arrow function : 함수의 다른 표현방법
- array.forEach(함수) : array의 갯수대로 함수를 실행한다. 함수를 실행할때 인자값으로 array의 값을 차레로 넘겨준다.

```js
parsedTodos.forEach((item) => console.log("hello", item));
```

```js
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
```

### deleting localStorage

- x버튼을 누르면 localstorage에 값도 삭제되도록
- 같은 값을 지닌 애를 삭제할 수도 있으니 toDos를 array대신에 id,text를 지닌 object로 만들자
- Date.now() 를 이용해 각자 다른 id를 만들자
- paintTodo()에 Obj을 주고 li의 id를 newTodo.id로 준다.

```js
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos array에 넣기
  paintTodo(newTodoObj);
  savedTodo();
}
```

- filter : array에서 무언가를 지우고 싶을 때 지우는게 아니라 지울 item을 제외하고 새 array를 만드는것이다.
- filter에 들어가는 함수는 남아있을 item은 true를 리턴하고 제외할 item은 false로 해주면 true인 item들로만의 array를 새로 마는다.

```js
function sexyFilter(item) {
  if (item > 1) {
    return true;
  } else {
    return false;
  }
}
console.log([1, 2, 3, 4].filter(sexyFilter));
// [2,3,4]
consoel.log([1,2,3,4].filter((item)=>return item !==3))
//3을 지우고 싶을때
```

```js
function deleteTodo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  savedTodo();
  li.remove();
}
```

## 1/12

# Weather

### geolocation

- navigator.geolocation.getCurrentPosition() : 인자2개
- 잘실행됬을때 실행할 함수, 에러함수

```js
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in ", lat, lng);
}
function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
```

### api

- 얻은 위도,경도를 openweathermap.org 에서 api를 확용하기
- openweathermap.org
- fetch : 직접 url눌러서 갈필요없이 js가 대신 Url을 부른다.
- promise 개념 배우기

---

## 추후해야할 것

- css로 꾸며보기
- 추가기능 : logout 에서 localStoarge에 username 지우기
- login하기전까지 todoList안보이게하기v