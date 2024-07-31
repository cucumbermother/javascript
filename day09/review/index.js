//1. 유저에게 배경색, 글 내용을 입력받고
//body에 유저에게 받은 배경색과 글의 내용이 담긴 버튼 태그 만들기

const arr = prompt("배경색과 글 내용입력").split(" ");
const btn = document.createElement("button");
btn.style.backgroundColor = arr[0];
btn.innerText = arr[1];
document.body.appendChild(btn);

//2.유저에게 배경색 3가지 묻고
//3가지 색을 각각 box(높이:100,넓이:100)을 가진
//상자 만들기

const bg = prompt("배경색 3가지 입력").split(" ");
bg.forEach((x) => {
  const div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
});
