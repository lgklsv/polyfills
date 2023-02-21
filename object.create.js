Object.create = null;

Object.superCreate = function (o, props) {
  function F() {}
  F.prototype = o;

  if (typeof props === 'object') {
    for (prop in props) {
      if (props.hasOwnProperty(prop)) {
        F[prop] = props[prop];
      }
    }
  }
  return new F();
};

const obj = Object.superCreate();
