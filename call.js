let name = {
  firstname: 'oleg',
  lastname: 'kolosov',
};

let printName = function (hometown) {
  console.log(`${this.firstname} ${this.lastname} ${hometown}`);
};

Function.prototype.superCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('its not a fuction');
  }

  context.fn = this;
  context.fn(...args);
};

// const printMyName = printName.call(name, 'moscow');

const printMyName = printName.superCall(name, 'moscow');
