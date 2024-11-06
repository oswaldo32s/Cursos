function fibs(num) {
  const result = [0, 1];
  if (num == 1) return [0];
  if (num == 2) return result;
  for (let i = 0; i < num - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result;
}
const fibsRec = (n) => {
  return n <= 0
    ? "Please enter a valid number of elements to be given an answer."
    : n === 1
    ? [0]
    : n === 2
    ? [0, 1]
    : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};

const testArray = [375, 405, 599, 381, 524, 802, 144, 464];
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
};

console.log(fibs(9));
console.log(fibsRec(9));
console.log(mergeSort([4, 5, 3, 10, 200, 149, 42]));
console.log(4 % 2);
