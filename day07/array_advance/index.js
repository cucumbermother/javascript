const arr = [1 ,2 ,3 ,4 ,5]
//arr.push(6)


//map: 요소들을 바꾸기 
//emoji: 윈도우 + .
//map의 매개함수는 함수 


//모두 하트
const heart = arr.map(()=>{

return `❤️`

});

console.log(heart)


//모든걸 숫자 10으로 바꿈

const num = [1 ,2 ,3 ,4 ,5 ,6 ,7, 8, 9]


const ten = num.map(() => {

return 10

});

console.log(ten)

//홀수면 1 짝수면 2로 나오게 만듦 

const oneTwo = num.map((x) => {
return x % 2 == 1 ? 1 : 2;

})

console.log(oneTwo);



//3이면 이모지 아니면 x


const three = num.map((x) => {
    return x == 3 ? "🎶" : "happy";
});

console.log(three);

const stringnum = num.map((x) => {
    return String(x);
})


console.log(stringnum)


//filter : 요소들을 필터링

const oddnum = num.filter((x) =>{
    return x % 2 == 1


}) // 홀수 빼고 다 빼주세요 1,3,5,7,9

console.log(oddnum)


//1. 3의 배수만 살리기
//2. 6 이상만 살리기


//1.

const three_multiple = num.filter((x) => {
    return x % 3 == 0
})


//2. 


const oversix = num.filter((x) => {
    return x >=  6
})



console.log(three_multiple)
console.log(oversix)


const fruits = ["peach", "apple", "mango", "strawberry","avocado",
    "grape","kiwi","watermelon","melon"]




    //1. melon이 들어간 과일만 살리기

const onlymelon = fruits.filter((x) => {
 return x.includes("melon") 

})


    //2. 글자 길이가 6 글자 이상만 살리기

    const lenth_six = fruits.filter((x) => {
       
 return x.length >= 6

    })
 
    
    //3. 모든 과일을 대문자로 바꾸기

    const upperfruits = fruits.map((x) => {
        return x.toUpperCase()
    })

    console.log(onlymelon)
    console.log(lenth_six)
    console.log(upperfruits)