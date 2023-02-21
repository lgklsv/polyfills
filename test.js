setTimeout(() => {
  console.log('2');
});

let p = new Promise((resolve, reject) => {
  console.log('1');
  resolve();
});

p.then(() => {
  console.log('3');
});

console.log(p);

console.log('4');
