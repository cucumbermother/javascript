//type casting : 타입 바꾸기


//1.문자/불리언을 숫자로!
const first = Number("100"); //숫자 100
const second = Number("777");
const result = first + second;
const result1 = "100" + "200";


window.console.log(result); //877
window.console.log(result1);//100777

const third = Number(true);//1
const fourth = Number(false);//0


//2.숫자를 문자로!
const a = string(1500); // "1500"
const b = string(true); // "true"


//3.숫자/문자에서 불리언

//0,-0,"" 는 flase
//나머지는 true

//all true
Boolean("마라탕");
Boolean("마라샹궈");
Boolean("탕후루");
Boolean(1004);
Boolean(4);