const fs = require("fs");
const [n, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (n, k) => {
  const people = Array.from({ length: n }, (_, index) => index + 1);
  let count = 0;
  let i = count - 1;
  const result = [];
  while (result.length !== n) {
    i++;
    count++;
    if (count % k === 0) {
      const [number] = people.splice(i, 1);
      result.push(number);
      i--;
    }
    if (i === people.length - 1) {
      i = -1;
    }
  }

  return `<${result.join(", ")}>`;
};
console.log(solution(n, k));