// ES2015 (ES6)

function Person(name, age){
    this.name = name;
    this.age = age;
}

var haha = new Person('호호', 28);

// 위 아래 둘의 코드는 같다 

class Person {
    constructor(name, age){
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var ji = new Person('나다', 27);  // 생성 되었습니다.
console.log(ji);