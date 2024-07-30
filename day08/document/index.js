//document: html을 담당하는 타입

//a는 Element 타입
const a = document.createElement("h1") // h1 태그 만들어줘
a.innerText = "점메추!"//h1태그에 점메추 넣어줘
document.body.appendChild(a)// 




//1. 버튼 태그를 만들고, 내용은 럭키비키 바디에 넣어주기

const test = document.createElement("button")
test.innerText = "럭키비키"
document.body.appendChild(test)

//2. div 태그 만들고,유저에게 아침에 먹었던 음식을 물어보고 div에 내용에 넣고
//body에 보여주기



const test2 = document.createElement("div")
test2.innerText  = prompt("아침에 무엇을 드셨나요")
document.body.appendChild(test2)