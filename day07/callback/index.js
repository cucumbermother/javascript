//함수 -> 마술상자
//함수안에 함수를 넣는것 = callback 함수
const luckybiky = (x) => {
    return x + "럭키비키잖아~";
};



luckybiky("월요일 아침")
luckybiky("자바스크립트")


console.log(luckybiky("월요일 아침"))
console.log(luckybiky("자바스크립트"))



const test = (x) => {



}


//

const ive = (x) => {
    console.log("아이브 멤버");
    x();
    console.log("끝");
}; 


const wonyoung = () => {
    console.log("럭키비키")
    console.log("장원영");
}

const youjin = () => {
    console.log("지락실")
    console.log("안유진");
}

// ive라는 함수에 wonyoung 함수와 youjin 함수를 넣음
// console.log ("장원영") 이 ive함수의 x(); 자리로 들어감
ive(wonyoung);
// 아이브 멤버
// 장원영
// 끝
ive(youjin);
// 아이브 멤버
// 안유진
// 끝