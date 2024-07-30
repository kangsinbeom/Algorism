const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on("line", function (line) {
    const input = line.split(" ");
    const newScore = input.map((str) =>
      [...str].reduce((acc, cur) => cur + acc, "")
    );
    console.log(Math.max(...newScore));
    readline.close();
  })
  .on("close", function () {
    process.exit();
  });
