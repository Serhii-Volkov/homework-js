 /* Задание 1 Есть массив с ценами товаров.
const prices = [23.5, 10, 99.99, 5.2];
Нужно вернуть новый массив, в котором:
• к каждой цене добавлен 15% налог
• итоговая сумма округлена до ближайшего целого числа */

const prices = [23.5, 10, 99.99, 5.2];

const procentov = 15;
const newPrices = prices.map((price) => Math.round((price / 100) * procentov + price))
console.log(newPrices);


 /* Задание 2 Дан массив пользователей. 
 Верните массив только тех, у кого isActive === true 
 и возраст больше или равен 18. */

const users = [
{ name: 'Anna', age: 17, isActive: true },
{ name: 'Oleh', age: 22, isActive: false },
{ name: 'Marta', age: 30, isActive: true },
{ name: 'Ivan', age: 19, isActive: true },
];

const findUsers = users.filter(user => user.isActive === true && user.age >= 18)
console.log(findUsers)


  
 /* Задание 3 Есть массив товаров. 
 Нужно найти первый товар, у которого есть свойство discount: true. */

const products = [
{ name: 'Shampoo', discount: false },
{ name: 'Serum', discount: false },
{ name: 'Cream', discount: true },
{ name: 'Mask', discount: true },
];

const findProduct = products.find(product => product.discount === true)
console.log(findProduct)



/* Задание 4 Дан массив имён. Нужно вывести в консоль строку вида:
Anna,
Dima,
и так далее
(то есть начиная с единицы пронумеровать каждое имя) */

const names = ['Anna', 'Dima', 'Sasha', 'Lyuda'];

names.forEach((item, index ) => {
  console.log(index + 1, item)
})



/* Задание 5 Проверьте:
• Есть ли хотя бы один пользователь младше 18 лет
• Все ли пользователи старше 10 лет */

const people = [25, 12, 17, 30, 45]

const isUserAgeUnder18 = people.some(age => age < 18)
const isAllUserAgeOver10 = people.every(age => age > 10 )
console.log(isUserAgeUnder18)
console.log(isAllUserAgeOver10)



/* Задание 6 У Вас есть массив заказов, 
где у каждого есть price и quantity. 
Нужно посчитать общую стоимость всех заказов. */

const orders = [
{ item: 'Serum', price: 30, quantity: 2 },
{ item: 'Mask', price: 15, quantity: 3 },
{ item: 'Cream', price: 50, quantity: 1 },
]; 

const total = orders.reduce((summ, {price, quantity}) => summ + price * quantity, 0)
console.log(total)




