// Массив чисел для демонстрации
const numbers = [1, 2, 3, 4, 5];

// 1. forEach()
console.log("Используем метод forEach:");
numbers.forEach((num) => {
  console.log(num); // Выводит каждый элемент массива
});

// 2. map()
console.log("\nИспользуем метод map:");
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 3. filter()
console.log("\nИспользуем метод filter:");
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// 4. reduce()
console.log("\nИспользуем метод reduce:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// 5. find()
console.log("\nИспользуем метод find:");
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

// 6. includes()
console.log("\nИспользуем метод includes:");
const hasTwo = numbers.includes(2);
console.log(hasTwo); // true

// 7. sort()
console.log("\nИспользуем метод sort:");
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]

// 8. Пример сочетания методов
console.log("\nПример сочетания методов:");
const uniqueDoubledEvens = numbers
  .filter((num) => num % 2 === 0) // Находим четные числа
  .map((num) => num * 2) // Удваиваем их
  .filter((value, index, self) => self.indexOf(value) === index); // Убираем дубликаты
console.log(uniqueDoubledEvens); // [4, 8]

// Массивы и их методы

// 1. every(): Проверяет, удовлетворяют ли все элементы массива условию.

const allEven = numbers.every((num) => num % 2 === 0);
console.log("Все числа четные:", allEven); // true

const someOdd = [1, 2, 3].every((num) => num % 2 === 0);
console.log("Все числа четные:", someOdd); // false

// 2. some(): Проверяет, удовлетворяет ли хотя бы один элемент массива заданному условию.
const hasEven = numbers.some((num) => num % 2 === 0);
console.log("Есть четные числа:", hasEven); // true

const allOdd = [1, 3, 5].some((num) => num % 2 === 0);
console.log("Есть четные числа:", allOdd); // false

// 3. slice(): Возвращает копию части массива, не изменяя оригинальный массив.
const fruits = ["apple", "banana", "cherry", "date"];
const slicedFruits = fruits.slice(1, 3);
console.log("Часть массива:", slicedFruits); // ['banana', 'cherry']
console.log("Оригинальный массив:", fruits); // ['apple', 'banana', 'cherry', 'date']

// 4. splice(): Изменяет содержимое массива, добавляя или удаляя элементы.
const numbers2 = [1, 2, 3, 4, 5];
const removed = numbers2.splice(2, 1); // Удаляет один элемент с индекса 2 (число 3)
console.log("Измененный массив:", numbers2); // [1, 2, 4, 5]
console.log("Удаленные элементы:", removed); // [3]

numbers2.splice(1, 0, 3); // Вставляет число 3 на индекс 1
console.log("После вставки 3:", numbers2); // [1, 3, 2, 4, 5]

// 5. concat(): Объединяет два или более массива.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
console.log("Объединенные массивы:", combined); // [1, 2, 3, 4, 5, 6]

// 6. join(): Объединяет все элементы массива в строку с указанным разделителем.
const elements = ["Fire", "Earth", "Water"];
const joinedString = elements.join(", ");
console.log("Объединенная строка:", joinedString); // 'Fire, Earth, Water'
