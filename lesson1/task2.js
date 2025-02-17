let message = "Hello";
message = 123456;
console.log(message);
let n = 123;
n = 12.345;
console.log(n);

let name = "Іван";

// вбудована змінна
console.log(`Привіт, ${name}е!`); // Привіт, Іване!

// вбудований вираз
console.log(`результат: ${1 + 2}`); // результат: 3

let nameFieldChecked = true; // так, ім’я було перевірене
let ageFieldChecked = false; // ні, вік не був перевіреним

let isGreater = 4 > 1;
console.log(isGreater); // true (результат порівняння — "так")

 name = "Ілля";

// вираз — число 1
console.log( `привіт ${1}` ); // привіт 1

// вираз є рядком "name"
console.log( `привіт ${"name"}` ); // привіт name

// вираз є змінною, яка вбудовується
console.log( `привіт ${name}` ); // привіт Ілля