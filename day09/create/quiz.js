//내 풀이

// const div = document.createElement("div");
// div.style.width = "1000px";
// div.style.height = "1000px";
// div.style.display = "flex";
// div.style.flexDirection = "column";

// const div0 = document.createElement("div");
// div0.style.width = "100px";
// div0.style.height = "100px";
// div0.style.backgroundColor = "green";

// const div1 = document.createElement("div");
// div1.style.width = "100px";
// div1.style.height = "100px";
// div1.style.backgroundColor = "pink";

// const div2 = document.createElement("div");
// div2.style.width = "100px";
// div2.style.height = "100px";
// div2.style.backgroundColor = "yellow";

// const div3 = document.createElement("div");
// div3.style.width = "100px";
// div3.style.height = "100px";
// div3.style.backgroundColor = "gray";

// div.appendChild(div0);

// div.appendChild(div1);

// div.appendChild(div2);

// div.appendChild(div3);

// document.body.appendChild(div);

//선생님 풀이

const makebox = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  document.body.appendChild(div);
};

["red", "blue", "black", "skyblue"].forEach((x) => {
  makebox(x);
});

// 가로
//1. container 만들고 flex준다

const container = document.createElement("div");
container.style.display = "flex";

const makebox1 = (x) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = x;
  return div;
};
//2. box 5개 만들고 container에 넣음

["red", "blue", "black", "skyblue", "yellow"].forEach((x) => {
  container.appendChild(makebox1(x));
});

//3. container를 body에 뿌림

document.body.appendChild(container);
