function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true (because 1*5 or 5*1)
console.log(isPrime(4)) // false (because 1*4 or 4*1 OR 2*2)