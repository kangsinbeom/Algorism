const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = [1, 1, 2, 2, 2, 8];
readline
  .on("line", function (line) {
    const input = line.split(" ").map((str, i) => answer[i] - str);
    console.log(input.join(" "));
    readline.close();
  })
  .on("close", function () {
    process.exit();
  });
