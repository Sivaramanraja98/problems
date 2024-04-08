function factorial(n) {
    if (n < 0) {
        return undefined;
    } else if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

const num = 4;
const result = factorial(num);
console.log(`The factorial of ${num} is:`, result);
