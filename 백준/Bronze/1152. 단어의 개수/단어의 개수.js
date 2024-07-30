const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on("line", function (line) {
    const input = line.split(" ").filter((str) => !!str).length;
    console.log(input);
    readline.close();
  })
  .on("close", function () {
    process.exit();
  });
