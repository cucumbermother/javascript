// const news = prompt("기사를 입력해 주십시오.")
// const word = prompt("바뀌게 싶은 단어를 입력하십시오.")
// const want = prompt("바꾸고 싶은 단어입력")
// const changednews = news.replaceAll(word,want);

//replaceAll은 전체 단어를 바꿔줌

// console.log(changednews)

//단어와 숫자를 입력하면 대문자화 시켜서 숫자만큼 반복된 단어 돌려주는 함수 만들기

function test(word, count) {
  return word.touppercase().repeat(count);
}
