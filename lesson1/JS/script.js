// alert("Hello world !!!");
// alert("");

// console.log("Check in console!");

// document.write("Document write!");
// document.write("<h1>Document write!</h1>");

// let age;
// console.log(age);

// console.log(age); //Uncaught ReferenceError: Cannot access 'age' before initialization
// let age = 27;
// console.log(age);

// Правильно
// let age;
// let user1;
// let $color;
// let _size;

// Не правильно
// let 1user;
// let my-user

// let let;
// let const;
// let var;
// let for;

// let username = "John";

// let username;
// username = "John";

// let username = "John", age = 25;
// console.log(username, age);

// let a = 10;
// let b = 5;
// console.log(a + b);

// let username = "John";
// let age = 25;

// console.log(username, age);
// console.log(username + age);
// console.log(username + " " + age);
// document.write("<h1>Hello Dear " + username + "!</h1>");


// Number 5
// String "hello"
// Boolean true/false
// Object {}, []
// Undefined
// Null
// Bigint

// >= больше и равно
// <= меньше и равно
// != не равно
// !== не равно

// console.log(5 > 4); // true
// console.log(1 > 4); // false
// console.log(5 = 5); // Error
// console.log(9 == "9"); // true
// console.log(9 === "9"); // false
// console.log(4 * "Hello"); // NaN

// console.log("5" + "4"); // 54
// console.log(5 + 3 + "2"); // 82
// console.log("8"+ 1 + 1); // 811
// console.log("8"+ (1 + 1)); // 82

// BTC/USDT = 50000$ курс

let currentRate = 50000;

function change() {
    let inputValue = document.querySelector(".input-1").value;
    let result = inputValue / currentRate;

    // console.log(inputValue + '$ = ' + result + 'BTC'); // 50000$ = 1BTC

    // let x = document.querySelector(".result-1");
    // x.innerText = "Hello";

    document.querySelector(".result-1").innerText = inputValue + '$ = ' + result + 'BTC';
}

function changeBack(){
    let inputValue = document.querySelector(".input-2").value;
    let result = inputValue * currentRate;

    document.querySelector(".result-2").innerText = inputValue + 'BTC = ' + result + '$';
}

function minus(){
    let input1 = document.querySelector(".input-3").value;
    let input2 = document.querySelector(".input-4").value;

    let result = input1 - input2;

    document.querySelector(".result-3").innerText = input1 + " - " + input2 + " = " + result;
}

function add(){
    let input1 = +document.querySelector(".input-5").value;
    let input2 = Number(document.querySelector(".input-6").value);

    let result = input1 + input2;

    document.querySelector(".result-4").innerText = input1 + " + " + input2 + " = " + result;
}
function subtract() {
    let input1 = Number(document.querySelector('.input-1').value);
    let input2 = Number(document.querySelector('.input-2').value);

    let result = input1 - input2;

    document.querySelector('.result-1').innerText = `Результат: ${input1} - ${input2} = ${result}`;
}

function multiply() {
    let input1 = Number(document.querySelector('.input-3').value);
    let input2 = Number(document.querySelector('.input-4').value);

    let result = input1 * input2;

    document.querySelector('.result-2').innerText = `Результат: ${input1} * ${input2} = ${result}`;
}
function divide() {
    let input1 = Number(document.querySelector('.input-5').value);
    let input2 = Number(document.querySelector('.input-6').value);

    let resultElement = document.querySelector('.result-3');

    if (input2 !== 0) {
        let result = input1 / input2;
        resultElement.textContent = `Результат: ${input1} / ${input2} = ${result}`;
    } else {
        resultElement.textContent = 'Деление на ноль невозможно';
    }
}

function getMinutes() {
    let input = Number(document.querySelector('.input-7').value);
    let resultElement = document.querySelector('.result-4');

    let result = input * 60;
    resultElement.textContent = `Результат: ${input} часа = ${result} минут`;
}

function calculateAverage() {
    let input1 = Number(document.querySelector('.input-8').value);
    let input2 = Number(document.querySelector('.input-9').value);
    let input3 = Number(document.querySelector('.input-10').value);

    let sum = input1 + input2 + input3;
    let average = sum / 3;

    let resultElement = document.querySelector('.result-5');
    resultElement.textContent = `Среднее значение от: ${input1} + ${input2} + ${input3} = ${sum} / 3 = ${average}`;
}