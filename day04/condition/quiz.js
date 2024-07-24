// const angle = Number(prompt("각도를 입력해주세요"));


// if (0 <= angle && angle < 90) {alert("예각입니다")} //각이 0보다 같거나 크던가 90도 보다 작다
// else if (angle == 90 ) {alert("직각입니다")} // 각이 90도와 같다
// else if (90 < angle && angle < 180) {alert("둔각입니다")} // 각이 90도 보다 크고 180도 보다 작다
// else if (angle == 180) {alert("평각입니다")} //각이 180도와 같다
// else {alert("입력오류")} // 위 조건 이외의 모든 값들은 입력 오류다





// const eng = Number(prompt("영어 시험 점수를 입력하시오"));
// if (eng > 90) {alert("A입니다")}
// else if (eng >= 80) {alert("b")}




// const ei = prompt("e인가요 i인가요?")

// const ns = prompt("n인가요 s인가요?")

// const ft = prompt("f인가요 t인가요?")

// const jp = prompt("j인가요 p인가요?")


// const mbti = {
// e: ["외향적"],
// i: "내향적",
// n: "직관적",
// s: "감각적",
// f: "감성적",
// t: "이성적",
// j: "계획적",
// p: "즉흥적",

// };


// console.log(`당신의 mbti는 ${mbti[ei]}이고  ${mbti[ns]}이고
    //  ${mbti[ft]}이고 ${mbti[jp]}이시군요`)








// const angle = Number(prompt("각도를 입력하세요"));



// if (0 < angle && 90 > angle) {alert("예각입니다")}
// else if (angle == 90) {alert("직각입니다")}
// else if (angle > 90 && angle <180) {alert("둔각입니다")}
// else if (angle == 180) {alert("평각입니다")}
// else (alert("올바른 값을 입력해주세요"))



//영어점수 물어보고 100~90은 a 80~90 b 70~80 c 69~0 f



// const test = Number(prompt("영어 점수를 입력해 주세요"));

// if(test>=90 && test <= 100) {alert("A등급 입니다.")}
// else if (test >= 80 && test < 90) {alert("B등급 입니다")}
// else if (test >= 70 && test < 80) {alert("C등급입니다")}
// else if (test >= 0 && test <= 69) {alert("F등급 입니다")}
// else {alert("올바른 값을 입력해 주세요")}







const ie = prompt("당신은 I 인가요 E 인가요?").toUpperCase()
const ns = prompt("당신은 N 인가요 S 인가요?").toUpperCase()
const ft = prompt("당신은 F 인가요 T 인가요?").toUpperCase()
const pj = prompt("당신은 P 인가요 J 인가요?").toUpperCase()


const a = "병신"

const mbti = {
I: "찐따",
E: "인싸",
N: "몽상가",
S: "감각주의자",
F: "감정조절불가능",
T: "현실주의자",
P: "무계획적",
J: "계획적"

};


alert(`당신은 ${a}이시고,${mbti[ns]}이시며, ${mbti[ft]}이시고, ${mbti[pj]}이십니다. `)