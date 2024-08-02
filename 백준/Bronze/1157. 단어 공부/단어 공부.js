const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on("line", function (line) {
    const input = line.split("").map((str) => str.toUpperCase());
    let max = 0;

    const myObject = {};

    input.forEach((str) => {
      if (myObject[str]) {
        myObject[str]++;
      } else {
        myObject[str] = 1;
      }
    });

    let count = 0;
    let result = "";

    for (const [key, value] of Object.entries(myObject)) {
      if (value > count) {
        count = value;
        result = key;
      } else if (value === count) {
        result = "?";
      }
    }
    console.log(result);
    readline.close();
  })
  .on("close", function () {
    process.exit();
  });
