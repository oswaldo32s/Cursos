function sumRange(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sumRange(n - 1);
  }
}

function pow(number, power) {
  if (power === 1) {
    return number;
  } else {
    return number * pow(number, power - 1);
  }
}

function factorial(number) {
  return number === 1 ? number : number * factorial(number - 1);
}

function all(array, fun) {
  let copy = array.slice();
  if (copy.length == 0) return true;
  if (fun(copy[0])) {
    copy.shift();
    return all(copy, fun);
  } else {
    return false;
  }
}

function productOfArray(array) {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
}

console.log(productOfArray([1, 2, 3]));
