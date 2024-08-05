// 유저에게 그리드 갯수를 묻고, 컨테이너 만들기

const column = Number(prompt("그리드 갯수 몇개?"));

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${column},1fr)`;

// A - Z 까지 각각 내용이 담긴 box 나열하기

[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((x) => {
  const box = document.createElement("div");
  box.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  box.style.display = "flex";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.padding = "20px";
  box.innerText = x;
  container.appendChild(box);
});

document.body.appendChild(container);
