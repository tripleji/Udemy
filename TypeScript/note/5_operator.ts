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

interface People {
    name: string;
    age: number;
}