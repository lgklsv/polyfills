const arr = [12, 4, 5, 6, 6, 7, 8, 2, 24, 42, 5];

// const res = arr.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

Array.prototype.reduce = null;

Array.prototype.superReduce = function (cb, initValue = null) {
  let acc = initValue;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const res = arr.superReduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(res);
