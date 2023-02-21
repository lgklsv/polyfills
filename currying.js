// add(5)(9)(-4)(1) -> 11. How to implement?

function add(a) {
  return function (b) {
    return b ? add(a + b) : a;
  };
}

const res = add(5)(9)(-4);

console.log(res);
