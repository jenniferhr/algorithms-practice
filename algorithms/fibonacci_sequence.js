function fibonacci(n) {
  let elements = [0,1];

    for(let i = 2; i < n; i++){
      elements[i] = elements[i - 1] +elements[i - 2];
    }
  return elements;
}


console.log(fibonacci(8)) // [0,1,1,2,3,5,8,13]
console.log(fibonacci(2)) // [0,1]