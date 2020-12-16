// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var gogo: string | number | boolean;

function logMessage(value: string | number){
    console.log(value);
    if (typeof value === 'number'){
        value.toLocaleString();
}
if (typeof value === 'string'){
    value.toString();
}
throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
//     someone.name
//     someone.skill
//     someone.age
}
askSomeone({name: '개발자', skill: '웹 개발'});
askSomeone({name: 'dd', age: '27'});

// function askSomeone(someone: Developer & Person){
//     someone.name
//     someone.skill
//     someone.age
// }