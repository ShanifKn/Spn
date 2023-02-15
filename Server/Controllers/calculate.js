export const zero = (operation) => {
  return operation ? operation(0) : 0;
};
export const one = (operation) => {
  return operation ? operation(1) : 1;
};
export const two = (operation) => {
  return operation ? operation(2) : 2;
};
export const three = (operation) => {
  return operation ? operation(3) : 3;
};
export const four = (operation) => {
  return operation ? operation(4) : 4;
};
export const five = (operation) => {
  return operation ? operation(5) : 5;
};
export const six = (operation) => {
  return operation ? operation(6) : 6;
};
export const seven = (operation) => {
  return operation ? operation(7) : 7;
};
export const eight = (operation) => {
  return operation ? operation(8) : 8;
};
export const nine = (operation) => {
  return operation ? operation(9) : 9;
};

export const plus = (x) => {
  return function (y) {
    return x + y;
  };
};
export const minus = (x) => {
  return function (y) {
    return y - x;
  };
};
export const times = (x) => {
  return function (y) {
    return x * y;
  };
};
export const dividedBy = (x) => {
  return function (y) {
    return Math.floor(y / x);
  };
};
