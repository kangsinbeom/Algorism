const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let initialInput = true;
let bucketNumber = 0;
let count = 0;
let buckets = [];
let chance = 0;
readline
  .on("line", function (line) {
    if (initialInput) {
      [bucketNumber, count] = line.split(" ").map(Number);
      buckets = Array.from({ length: bucketNumber }, (_, i) => i + 1);
      initialInput = false;
    } else {
      const [start, end] = line.split(" ").map(Number);
      const temp = [...buckets.slice(start - 1, end)].reverse();
      buckets.splice(start - 1, Math.abs(end - start) + 1, ...temp);
      chance++;
    }
    if (count === chance) {
      readline.close();
    }
  })
  .on("close", function () {
    console.log(buckets.join(" "));
    process.exit();
  });
