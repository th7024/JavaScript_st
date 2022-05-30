
function sayH(name){
    console.log(`안녕하세요 ${name}님!`)
}
sayH('코드잇')
sayH('좋아요')
sayH('사랑해')
sayH() //undefined

let x
console.log(x) //undefined 정의가 안됨
x = null
console.log(x) 
console.log(sayH('dd')) //함수 리턴문이 없어서 undefined

//옵셔널 파라미터 : 함수에 파라미터를 선택적으로 전달이 가능하도록 하는 것 / 값을 미리 할당한 후 파마리터로 전달해도 되고 안해도 됨
// 옵셔널 파라미터는 생성한 후 가장 뒤쪽으로 선언해주어야 파라미터를 불러올 때 꼬이지 않는다.
function introduce(name,age,nat='한국'){
    console.log(`제 이름은 ${name}입니다.`)
    console.log(`나이는 ${age}살 이고,`)
    console.log(`국적은 ${nat}입니다.`)
}

introduce('코드잇',4,'미국') // 값을 모두 전달한 경우
console.log('')
introduce('코드잇',4)//파라미터 값을 생략한 경우