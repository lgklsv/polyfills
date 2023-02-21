// myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?

function myFunc(combiner, ...values) {
  return values.join(combiner);
}

const res = myFunc('!', 4, -10, 34, 0);

console.log(res);
