// //generla function [일반 함수]

// function smaller (a,b) {
    
// return a > b ? "b" : "a";

// }

// //arrow function [화살표 함수]


// const smaller1 = (x,y) => {
//     return x > y ? y : x;
// };



// //어떠한 단어가 들어오면 뒤에 "!" 붙여서 돌려주는 함수

// const a = (x) => {
// return x + "!";

// }


// // 어떠한 숫자가 들어오면 반 나눠서 돌려주는 함수


// const num = (x) => {
// return x/2

// }

// //어떠한 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수



// const num2 = (x,y) =>{
// return (x+y)*2

// }

// //어떠한 배열과 과일을 넣었을때, 배열에 과일을 추가로 넣어주는 함수


// const fruits = ["토마토","키위"]+






// const cart =  (arr,fruit) => {

// arr.push(fruit);

// }


// cart (fruits, "사과")




// //어떠한 배열과 과일을 영어로 넣었을때,
// //과일에 알파벳이 a,p가 들어가면 배열에 추가가 안되고
// // 그게 아니면 추가되는 함수 만들기

// const noap = (arr,fruit) => {
// if(!fruit.includes("a") && !fruit.includes("p")) {
// arr.push(fruit);

// }

// }



//비밀번호를 입력했을때, !,#이 들어가면 비밀번호
//충족 아니면 비밀번호 재설정



// const passwordcheck = (password) => {
// if (password.includes("!") || password.includes("#")){
//    return "비밀번호 충족"
// }

// else {
//     return "비밀번호 재설정"}


// }





//비밀번호를 입력했을때, !,#이 안들어가면
//! or # 가 안들어가면 특수문자 필수
//비밀번호의 길이가 6~20 사이가 아니면 비밀번호 길이를 재수정
//비밀번호 시작이 ITor it로 시작안하면 반드시 IT or it로 시작!
//다 통과되면 비밀번호 통과


//lenth는 함수가아님 몇글자인지 숫자로 나타냄



const passwordcheck2 = (password2) => {
    if (!password2.includes("!") && !password2.includes("#")){
       return "특수문자 필수!"
    }
    else if (!password2.length <= 6 || 20 < password2.length) {
        return "비밀번호 길이를 재수정해주세요"
    }
    
    else if (!(password2.startsWith("IT")||password2.startsWith("it"))){
        return "반드시 IT,it로 시작해주세요"
    }

    else {
        return "비밀번호 통과"}
    
    
    }


//     배열, 과일, 갯수를 매개변수로 입력 받고,
// 배열에 {name:과일, count:갯수} 추가되는 함수 만들기
const empty = [];
const add = (arr, fruit, num) => {
  arr.push({name: fruit, count: num} );
};
add(empty, "사과", 5);
add(empty, "배", 3);
add(empty, "키위", 2);

console.log(empty);


