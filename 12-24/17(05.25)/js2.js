const user = {
    get nameOut() {
        return this._name;
        
    }, //출력을 하는 매서드
    set nameIn(value) {
        if (value.length < 5) { 
            console.log('글자수를 확인해 주세요');
            return; 
        }
        this._name=value
    }//입력을 하는 매서드 
   
}
user.nameIn = 'ben'; //set함수의 value값으로 들어감  
console.log(user.nameOut)  //
//get과 set의 이름은 달라도 됨 같아도 됨

