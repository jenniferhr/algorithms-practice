function factorial(n) {
  let x = 1;
  while (n > 1) {
    x *= n;
    n--;
  }
  return x;
}

console.log(factorial(4)) // 24
console.log(factorial(5)) // 120
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
