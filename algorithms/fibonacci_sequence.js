function fibonacci(n) {
  let elements = [0,1];

  if (n > 2) {
    for(let i = 2; i < n; i++){
      let lastNumber = elements[elements.length - 1];
      let secondTolastNumber = elements[elements.length - 2];

      // console.log(`running for loop, i is: ${i}, lastNumber is ${lastNumber}, secondTolastNumber is ${secondTolastNumber}`)

      let newElement = lastNumber + secondTolastNumber;
      elements.push(newElement);
    }
  }
  return elements.slice(0, n)
}


console.log(fibonacci(8)) // [0,1,1,2,3,5,8,13]
console.log(fibonacci(2)) // [0,1]