

function greet(){
    console.log("안녕 내 이름은 제시카야")
}


greet(name)

function meetAt(year, month, date) {
    let todayYear = year;
    let todayMonth = month;
    let todayDate = date;

    if (todayDate) {
        return `${todayYear}/${todayMonth}/${todayDate}}`;
    }
    if (todayMonth) {
        return `${todayYear}년 ${todayMonth}월`;
    }
    if (todayDate) {
        return `${todayYear}년`;
    }
}

console.log(meetAt(2022,1,7))