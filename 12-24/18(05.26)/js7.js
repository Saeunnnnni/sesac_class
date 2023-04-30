var array = [1, 2, 3, 4, 5]

function arrFnc(arrlist) {
    arrlist.forEach((data, index, arr) => {
        console.log(`데이타:${data}`)
        console.log(`인덱스:${index}`)
        console.log(`arr:${arr}`)
    })
}

arrFnc(array)
