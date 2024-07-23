const birth = Number(prompt("태어난년도를 입력하세요"));
const isAdult = 2024 - Number(birth) >= 20 ? "성인" : "민짜";
alert(`${isAdult} 입니다!`);


const height = Number(prompt("키를 입력해주세요"));
const high = 140 <= height ? "탑승할 수 있습니다" : "탑승이 불가능 합니다.";
alert(high);



const gender = prompt("성별을 입력해 주세요") ;
const age = Number(prompt("나이를 입력해주세요"));
const army= gender == "남성" && 20 <= age ? "징집대상입니다" : "징집대상이 아닙니다.";


const total = Number(prompt("총 구매 금액"));
const cost = total >= 50000 ? totla * 0.9 : total;
console.log(`다이소 총 구매 금액: ${cost} 입니다.`);


const age1 = Number(prompt("나이를 입력해 주세요")) ;
const result = age1 >= ? "성인" : age1