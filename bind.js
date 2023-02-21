let name = {
  firstname: 'oleg',
  lastname: 'kolosov',
};

let printName = function (hometown, state) {
  console.log(`${this.firstname} ${this.lastname} ${hometown} ${state}`);
};

// let printMyName = printName.bind(name);
// printMyName();

Function.prototype.superbind = function (...args) {
  const obj = this;

  const params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const printMyName = printName.superbind(name, 'moscow');
printMyName('city');
