const arr = [12, 4, 5, 6, 6, 7, 8, 2, 24, 42, 5];

// const res = arr.reduce((acc, cur) => {
//   return acc + cur;
// }, 0);

Array.prototype.map = null;

Array.prototype.superMap = function (cb) {
  let resArr = [];
  for (let i = 0; i < this.length; i++) {
    resArr.push(cb(this[i], i, this));
  }
  return resArr;
};

const res = arr.superMap(el => {
  return el > 5;
});

console.log(res);
