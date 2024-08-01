//String -> Array으로 바꿔주는 타입캐스팅
//spread 연산자

const a = [..."hello world"]
console.log(a)


//Array -> String 타입 캐스팅

//1. 지양하셈
a.toString() //h,e,l,l,o,w,o,r,l,d

//2. 이거쓰셈
a.join(""); //helloworld
a.join("!")//h!e!l!l!o!w!o!r!l!d!

