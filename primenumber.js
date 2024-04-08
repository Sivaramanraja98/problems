// Prime numbers are natural numbers greater than 1 that have exactly two distinct positive divisors: 1 and the number itself.
// In other words, a prime number is only divisible by 1 and itself, and it cannot be formed by multiplying two smaller natural numbers.
// Examples of prime numbers include 2, 3, 5, 7, 11, and so on.

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let number = 101;
isPrime(number)
  ? console.log(`${number}` + " is a prime number")
  : console.log(`${number}` + " is not a prime number");
