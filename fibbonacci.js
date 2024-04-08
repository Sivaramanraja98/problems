function fibonacci(n) {
    if (n <= 0) {
        return 0; // Fibonacci of 0 and negative numbers is 0
    } else if (n === 1 || n === 2) {
        return 1; // Fibonacci of 1 and 2 is 1
    }

    let fibPrev = 1;
    let fibCurr = 1;

    for (let i = 3; i <= n; i++) {
        let fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return fibCurr;
}

const n = 9;
const nthFibonacci = fibonacci(n);
console.log(`The ${n}th Fibonacci number is:`, nthFibonacci);
