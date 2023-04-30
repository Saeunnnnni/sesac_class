
const year = ['2022', '2023', '2024', '2025']
const year1={}
console.log(year.indexOf('2026')) //인덱스번호 리턴 
console.log(year.includes('2022')) //배열안에 있는지 없는지 확인 t/f 
console.log(Array.isArray(year1)) //배열인지 아닌지

//year.indexOf('2026')
const value = year.indexOf('2024');
if (value !== -1) {
    console.log('값이 있다')
} else {
    console.log('값이 없다')
    }
//만약에 -1이 아니면 값이 있다 , 맞으면 값이 없다 라고 추출