


/*Задание 1
const cities = ["Toronto", "kyiv", "Amsterdam", "Berlin", "london"];
Отсортируйте:
1. По алфавиту (A → Z) без учёта регистра.
2. В обратном порядке (Z → A).*/

const cities = ["Toronto", "kyiv", "Amsterdam", "Berlin", "london"] 
const sortedCitiesAZ = [...cities].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
const sortedCitiesZA = [...cities].sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase()))
console.log(sortedCitiesAZ)
console.log(sortedCitiesZA)

//Задание 2
let i = 10
while(i >= 0) {
  console.log(i)
  i--
  
} 


/*Задание 4
У Вас есть массив чисел:
const numbers = [3, 7, 12, 5, 9, 20, 15];
Найдите первое число, которое делится на 5 без остатка, и выведите его. После этого остановите цикл. */

const numbers = [3, 7, 12, 5, 9, 20, 15];


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(numbers[i]);
    break;
  }
}
