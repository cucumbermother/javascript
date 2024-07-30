const arr = [1,2,3,4,5,6,7,8,9,10]

//1. 홀수는 2배 짝수는 제곱으로 다시 만들기



const test = arr.map((x) => {
   return x % 2 == 0 ? x**2: x*2
})



//2. 3의배수 당근 5의배수 체리 나머지는 수박
const test2 = arr.map((x) => {
   if(x % 3 == 0) {
    return "🥕"
   }else if (x % 5 == 0) {
    return "🍒"
   }else{
    return "🍉"
   }
})


const fruits = ["apple","banana","melon","kiwi","mango","strawberry"]




const oversix = fruits.filter((x) => {
return x.length >= 6;
})


const four = fruits.filter((x) => {
    return x.includes ("a");
})


console.log(test)
console.log(test2)
console.log(oversix)
console.log(four)