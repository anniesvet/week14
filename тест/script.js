// 1 Функция как параметр

// function test (func) {
//     func ()
// }

// test (function() {
//     console.log ('Привет!');
// })

// 2 Функция мгновенного вызова

// (function (a, b) {
//     console.log (a + b);
// })(2,5)

// console.log ((function (a, b) {
//     return a + b;
// }))(2,5)

// 3 Стрелочные функции

// let sum3 = (a, b) => a + b;

// let result = sum3(12,10);

// let y = x => x * x;
// console.log(y(2));

// let showMessage = () => console.log('Привет!');

// showMessage ();

let showMessage = () => {
    let name = prompt ('Введите имя');
    console.log('Привет!');
}

showMessage ();