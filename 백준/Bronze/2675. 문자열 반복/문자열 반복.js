const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let initialInput = true;
let number;
let count = 0;
readline
  .on("line", function (line) {
    if (initialInput) {
      number = Number(line);
      initialInput = false;
    } else {
      const [repeatNumber, str] = line.split(" ");
      console.log([...str].map((str) => str.repeat(repeatNumber)).join(""));

      count++;
      if (number === count) readline.close();
    }
  })
  .on("close", function () {
    process.exit();
  });
