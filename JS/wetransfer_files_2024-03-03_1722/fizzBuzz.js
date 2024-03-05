for (let i = 1; i <= 100; i++) {
  if ((i % 3 == 0) & (i % 5 == 0)) {
    console.log(`The number is ${i} and it's a FizzBuzz.`);
  } else if (i % 3 == 0) {
    console.log(`The number is ${i} and it's a Fizz.`);
  } else if (i % 5 == 0) {
    console.log(`The number is ${i} and it's a Buzz.`);
  } else {
    console.log(`The number is ${i}.`);
  }
}
