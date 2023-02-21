const arr = [1, [3, 5, 34, [534, 5, [3]], [43, 2]]];

// const res = arr.flat(3);

Array.prototype.flat = null;

Array.prototype.superFlat = function (depth) {
  let res = [];
  function flattener(arr, depth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth) {
        flattener(arr[i], depth - 1);
      } else {
        res.push(arr[i]);
      }
    }
  }
  flattener(this, depth);
  return res;
};

const res = arr.superFlat(3);

console.log(res);
