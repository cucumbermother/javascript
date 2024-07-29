const bus = Number(prompt(`[마을버스:1500,고속버스:2000, 우등버스:3000] 버스 종류 입력`))
const age = Number(prompt("나이를 적어주세요"))
const bus_fee = [1500,2000,3000];
const bus_name = ["마을버스","고속버스","우등버스"];

if (age <= 13){
    console.log(`${bus_name[bus]} 0원 부탁드립니다`)}

else if(65 <= age) {
        console.log(`${bus_name[bus]} ${bus__fee[bus]*0.7}원 결제부탁드립니다`)
    }

else {

        console.log(`${bus_name[bus]} ${bus__fee[bus]}원 결제부탁드립니다`)
    }
