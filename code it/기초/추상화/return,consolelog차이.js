function printS(x){
    console.log(x*x)
}

function getS(x){
    return x*x; //return은 값을 반환하기 때문에 변수에 담아주거나 따로 출력을 해주어야함
}

printS(3)
getS(3) //X
console.log(getS(3)) //0
console.log(printS(3)) //return문이 없는 함수를 출력하면 undefined가 출력됨