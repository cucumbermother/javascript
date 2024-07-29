const arr = [1,2,3,4,5];


arr.push(6) // 맨 뒤에 추가하기
arr.reverse()//6 5 4 3 2 1


const stocks = ["samsung", "kakao","apple","lg"];

stocks.push("hybe") // 뒤에 추가
stocks.pop()//맨 뒤에 하나삭제
stocks.unshift("kia") //맨 앞에 추가
stocks.shift() // 맨 앞에 삭제
stocks.reverse()//거꾸로

stocks.indexOf("apple") // 몇번째인지 알려줌 , 없으면 -1
stocks.includes("facebook") //존재 유무 알려줌