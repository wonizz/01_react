class Person {
  constructor(name, tel, address){
    this.name = name;
    this.tel = tel;
    this.address = address;
    if(Person.count) { Person.count++; } else {Person.count = 1};
  }
  static getPersonCont(){
    return Person.count;
  }
  toString(){
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
  }
}
var p1 = new Person("홍길동", "010-6291-8920", "서울시");
var p2 = new Person("이몽룡", "010-6705-8710", "경기도");
console.log(p1.toString());
console.log(Person.getPersonCont());
//테스트
