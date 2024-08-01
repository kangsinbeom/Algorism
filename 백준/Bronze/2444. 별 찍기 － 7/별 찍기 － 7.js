const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", function (line) {
  const count = +line;
  
  // 상단 피라미드
  for (let i = 0; i < count; i++) {
    const stars = "*".repeat(2 * i + 1);
    const paddedStars = stars.padStart(count + i, " ");
    console.log(paddedStars);
  }
  
  // 하단 피라미드
  for (let i = count - 2; i >= 0; i--) {
    const stars = "*".repeat(2 * i + 1);
    const paddedStars = stars.padStart(count + i, " ");
    console.log(paddedStars);
  }
  
  readline.close();
}).on("close", function () {
  process.exit();
});
