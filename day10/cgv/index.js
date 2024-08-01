const theater = document.createElement("div");
theater.style.display = "grid";
theater.style.gridTemplateColumns = "repeat(14, 1fr)";


const makeSeat = (alphabet) => {
return Array(14)
.fill("A")
.map((x, i) => {
  return x + (i + 1);
});

}


[..."ABCDEFGIJKL"].forEach((x) => {
    makeSeat(x).forEach((x) => {
        const seat = document.createElement("div");
        seat.style.width = "100px";
        seat.style.height = "100px";
        seat.style.border = "1px solid black";
        seat.innerText = x;
        seat.style.textAlign = "center";
        seat.style.backgroundColor = "gray";
        theater.appendChild(seat);
    });
 
});

document.body.appendChild(theater);
