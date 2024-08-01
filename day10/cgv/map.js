//1. 배열만들기 with Array

const a = Array(10).fill("A");

//2.
const b = Array(10)
  .fill("")
  .map((x, i) => {
    return i;
  });

console.log(b);

const c = Array(14)
  .fill("A")
  .map((x, i) => {
    return x + (i + 1);
  });

console.log(c);
