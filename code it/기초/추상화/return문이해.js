//함수에서 return문은 값을 되돌려주는 output역할을 함
// 함수의 실행을 중단하는 역할도 함
function square(x){
    console.log('return 전')
    return x*x
    console.log('return 후') //return 때문에 콘솔에 출력이 안됨
}

console.log('함수 호출 전')
console.log(square(3))
console.log('함수 호출 후')