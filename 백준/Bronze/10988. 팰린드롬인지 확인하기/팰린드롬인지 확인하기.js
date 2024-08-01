const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on("line", function (line) {
    const words = line;
    const reversedWords = [...words].reduce((acc, cur) => cur + acc, "");
    console.log(reversedWords === words ? 1 : 0);

    readline.close();
  })
  .on("close", function () {
    process.exit();
  });
