// -------------------- 02 ---------------------------

var number1 = Math.floor(Math.random() * 100)
var remainder = number1 % 2

if (remainder === 0) {
  console.log(number1, 'Это четное число')
} else {
  console.log(number1, 'Это нечетное число')
}

// -------------------- 03 ---------------------------

let number = 1;

console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);

// -------------------- 04 ---------------------------

let x = 5;
x += 3;
x *= 2;
x -= 4;
x /= 3;

console.log(x);

// -------------------- 05 ---------------------------

let rule = "Еще не родился тот человек, который поставил бы цель и не смог бы стать программистом.";

switch (true) {
  case rule.length < 25:
    console.log("Все таки нет правил без исключения");
    break;
  case rule.length > 25:
    console.log("У меня 100 пудов все получится");
    break;
  default:
    console.log("50 на 50");
    break;
}

// -------------------- 06 ---------------------------

let str = "zzzzyzz";
let result = str.includes("y") ? "нашел" : "заблудился";
console.log(result);

// -------------------- 07 ---------------------------

let iAm = 'я'
let krasavchik = "красавчик!";

console.log(iAm[0].toUpperCase(), krasavchik);