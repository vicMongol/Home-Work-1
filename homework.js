let i;
let someNumber = prompt("Enter any number", "");

function isInteger(someNumber) {
    return (someNumber ^ 0) === +someNumber;
}
console.log(isInteger(someNumber));
if (someNumber > 0) {
    console.log (true);
} else {
console.log (false);
}
if (someNumber < 0) {
    console.log (true);
} else {
console.log (false);
}
if (+someNumber === 0) {
    console.log (true);
} else {
console.log (false);
}

//  короткая запись 
i = (someNumber > 0) ? true : false;
console.log(i);
i = (someNumber < 0) ? true : false;
console.log(i);
i = (+someNumber === 0) ? true : false;
console.log(i);

// Я не знал, что в консоль выводить булю или число, по этому...

i = (someNumber > 0) ? someNumber : false;
console.log(i);
i = (someNumber < 0) ? someNumber : false;
console.log(i);
i = (+someNumber === 0) ? true : false;
console.log(i);












