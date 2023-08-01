var number1 = Math.floor(Math.random() * 100)
var remainder = number1 % 2

if (remainder === 0) {
  console.log(number1 + ': Это четное число')
} else {
  console.log(number1, 'Это нечетное число')
}

console.log(number1)