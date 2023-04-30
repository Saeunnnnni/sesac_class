const color = ['red', 'green', 'blue']
console.log(color.unshift('yellow'))//제일 앞에 추가 
console.log(color)
console.log(color.push('orange'))//제일 뒤에 추가 
console.log(color)
console.log(color.splice(2,0,'sky','black'))//원하는 위치에 추가하고 싶을때(시작인덱스,삭제할갯수,추가할값)
console.log(color)

