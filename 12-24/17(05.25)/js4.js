//class get set
//입학년도 +4

class Student {
    constructor(name) {
        this.name = name;
        
    }
    get getEndYear() {
        return `${this.name}의 졸업년도는 ${this.startYear+4}`
    }
    set setStartYear(year) {
        this.startYear = year; 
    }
}
const Student1 = new Student('김성수');
Student1.setStartYear = 2000; //값을 입력한 값 
Student1.getEndYear;  
console.log(Student1.getEndYear)