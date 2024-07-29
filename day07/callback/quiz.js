//cook! recipe 요리시작! recipe() 요리끝!
//taco 함수 1.타코준비 2.재료넣기 3.감싸기
//ramen 함수 1.물끓이기 2.면 넣기 3. 스프넣기 4. 물끄기


const cook = (recipe) => {
    console.log("요리 시작");   
    recipe();
    console.log("요리 끝 ");
};

const taco = (x) => {
    console.log("1. 타코 준비");
    console.log(`2. ${x} 넣기`);
    console.log("3. 감싸기");
};


taco("새우")
taco("치즈")

const ramen = () => {
    console.log("1. 물 끓이기");
    console.log("2. 면 넣기");
    console.log("3. 스프 넣기");
    console.log("4. 물 끄기");
};


cook(()=>taco("새우"));
cook(()=>taco("치즈"));
cook(()=>taco("아보카도"));


cook(ramen);

//위에 것은 곧 아래랑 같음 
cook(() => {

    console.log("1. 물 끓이기");
    console.log("2. 면 넣기");
    console.log("3. 스프 넣기");
    console.log("4. 물 끄기");

});

//call back 함수의 장점 : 결과 값을 유연하게 할수있다


