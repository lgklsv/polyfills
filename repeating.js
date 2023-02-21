// 'hello world'.repeating(3) -> 'hello world hello world hello world'. How to implement?

String.prototype.repeating = function (times) {
  let output = [];
  for (let i = 0; i < times; i++) {
    output.push(this.valueOf());
  }
  return output.join(' ');
};

const resStr = 'hello world'.repeating(3);

console.log(resStr);
