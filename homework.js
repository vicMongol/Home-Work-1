// let i;
// let someNumber = prompt("Enter any number", "");

// function isInteger(someNumber) {
//     return (someNumber ^ 0) === +someNumber;
// }
// console.log(isInteger(someNumber));
// if (someNumber > 0) {
//     console.log (true);
// } else {
// console.log (false);
// }
// if (someNumber < 0) {
//     console.log (true);
// } else {
// console.log (false);
// }
// if (+someNumber === 0) {
//     console.log (true);
// } else {
// console.log (false);
// }

// // //  короткая запись 
// // i = (someNumber > 0) ? true : false;
// // console.log(i);
// // i = (someNumber < 0) ? true : false;
// // console.log(i);
// // i = (+someNumber === 0) ? true : false;
// // console.log(i);

// // // Я не знал, что в консоль выводить булю или число, по этому...

// // i = (someNumber > 0) ? someNumber : false;
// // console.log(i);
// // i = (someNumber < 0) ? someNumber : false;
// // console.log(i);
// // i = (+someNumber === 0) ? true : false;
// // console.log(i);

// // var simplyMass = ["ключи", "значение", "литерал", "функции", "конкотинация"];
// // var reversMass = [];
// // var x = simplyMass.pop();
// // reversMass.unshift(x);
// // for ( i = 0; i < 5; i++ ) {
// //     var x = simplyMass.pop();
// //     reversMass.unshift(x);
// //} 

var reversMass = [")", "Lol", "emanresu", "olleH"];
    reversMass.splice(0, 4, "Hello username )");
    console.log(reversMass.join(" "));

var reversMassTry2 = [")", "Lol", "emanresu", "olleH"];
    reversMassTry2.splice(-3, 3, "Hello username");
    reversMassTry2.reverse();
    console.log(reversMassTry2.join(" "));

var reversMassTry3 = [")", "Lol", "emanresu", "olleH"];
reversMassTry3.splice(1, 1);
var indexHello = reversMassTry3[2].split('').reverse().join("");
var indexUsName = reversMassTry3[1].split('').reverse().join("");
console.log(indexHello + " " + indexUsName + " " + reversMassTry3[0]);

var tabelStudens = [
    {name: "Tetiana", mark: 4.8, diploma: true},
    {name: "Andrew", mark: 5.0, diploma: false},
    {name: "Maria", mark: 3.6, diploma: true},
    {name: "Margo", mark: 4.8, diploma: false},
    {name: "Sergey", mark: 4.9, diploma: false},
    {name: "Alex", mark: 4.9, diploma: false},
    {name: "Anatoly", mark: 4.9, diploma: true},
];

function compareStudens(user1, user2) {
    if (user1.mark > user2.mark) {
        return -1;
    } else if (user1.mark == user2.mark) {
        if (user1.diploma > user2.diploma) {
            return -1;
        } else if (user1.diploma == user2.diploma) {
            if (user1.name > user2.name) {
                return 1;
            } else {
                return -1;
            }
        } else {
            return 1;
        }
    } else {
        return 1;
    }
}
tabelStudens.sort(compareStudens);
tabelStudens.length = 5;
console.log(tabelStudens);

var massData = ["el-1", "el-2", "el-3", "el-8", "el-5"];

function changeMass(a) {
    var newMass = massData[a].split('');
    newMass.splice(-2,1, ":");
    var someString = newMass.join("");
   return (someString + " " + "(" + (a + 1) + ")" + ", ");
}
console.log( changeMass(0) + changeMass(1) +  changeMass(2) +  changeMass(3) +  changeMass(4) );