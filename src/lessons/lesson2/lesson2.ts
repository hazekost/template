console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (num1: number) => {
    return (num2: number) => {
        return num1 + num2
    }
}

console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let count = 0
    return () => {
        count += 1
        return count
    }
}
const counter = makeCounter()
console.log(counter());
console.log(counter());
const counter2 = makeCounter()
console.log(counter2());
console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounter2 = (num: number) => {
    return {
        state: num,
        increase() {
            this.state += 1
        },
        decrease() {
            this.state -= 1
        },
        reset() {
            this.state = 0
        },
        set(num: number) {
            this.state = num
        },
    }
}

console.log(makeCounter2(10));

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

const superSum = (num: number) => {
    if (num <= 0) return 0;
    if (num === 1) return (num1: number) => num1;
    let arr: Array<number> = [];
    const helper = (...nums: Array<number>) => {
        arr = [...arr, ...nums]
        if (arr.length >= num) {
            arr.length = num
            // for (let i = 0; i < arr.length; i++) {
            //     res += arr[i]
            // }
            return arr.reduce((acc, n) => acc + n, 0)
        } else {
            return helper
        }
    }
    return helper
}

console.log(superSum(0));
//@ts-ignore
console.log(superSum(3)(2)(5)(3));
//@ts-ignore
console.log(superSum(3)(2)(5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9));

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

const sumToRecursion = (n: number): number => {
    if (n === 1) return n
    return n + sumToRecursion(n - 1)
}

console.log(sumToRecursion(5));


const sumToCicle = (n: number) => {
    let num = n
    let res = 0
    while (num !== 0) {
        res += num
        num -= 1
    }
    return res
}

console.log(sumToCicle(5));

const recFactorial = (n: number): number => {
    if (n === 1) return 1
    return n * recFactorial(n - 1)
}

console.log(recFactorial(5));

const factorial = (n: number) => {
    let acc = 1
    let num = n
    while (num !== 0) {
        acc *= num
        num -= 1
    }
    return acc
}

console.log(factorial(5));

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export const fc = () => { };