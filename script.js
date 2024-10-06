//Задание 1: Определение функций (Function Declaration)
function greet(name) {
    console.log(`Привет, ${name}!`);
}

// Пример вызова функции:
greet("Иван");

//Задание 2: Function Expression
let multiply = function(a, b) {
    return a * b;
};

// Пример вызова функции:
let result = multiply(3, 4);
console.log(result);

//Задание 3: Анонимные функции
(function() {
    console.log("Анонимная функция вызвана!");
})();

//Задание 4: Самовызывающаяся функция (IIFE)
(function() {
    console.log("IIFE выполнена");
})();

//Задание 5: Вложенные функции
function outer() {
    function inner() {
        return "Внутренняя функция";
    }
    return inner();
}

// Пример вызова функции:
let message = outer();
console.log(message); 

//Задание 6: Привязка функции к контексту (bind)
let person = {
    name: "Юрий",
    sayName: function() {
        console.log(this.name);
    }
};

// Привязываем функцию sayName к объекту person
let boundSayName = person.sayName.bind(person);

// Пример вызова:
person.sayName();

//Задание 7: Замыкания

function counter() {
    let n = 0; 

    return function() {
        n++; 
        console.log(n); 
    };
}

// Пример использования
let count = counter();

count(); 
count(); 
count();

//Задание 8: Передача функции в качестве аргумента

function execute(func, num1, num2) {
    return func(num1, num2); 
}

function multiply1(a, b) {
    return a * b;
}

// Пример использования
console.log(execute(multiply1, 2, 5))