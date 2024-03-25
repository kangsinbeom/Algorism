const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesRead = 0;
let N = 0; // 전체 일수
let K = 0; // 연속될 일수
let temperatures = []; // 기온 데이터를 저장할 배열

rl.on("line", (line) => {
  linesRead++;
  if (linesRead === 1) {
    // 첫 번째 줄에서 N과 K를 추출합니다.
    [N, K] = line.split(" ").map(Number);
  } else if (linesRead === 2) {
    // 두 번째 줄에서 기온 데이터를 추출합니다.
    temperatures = line.split(" ").map(Number);
    // 입력을 모두 받았으므로 연산을 수행하고 출력 후, readline 인터페이스를 닫습니다.
    console.log(findMaxTemperatureSum(N, K, temperatures));
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});

function findMaxTemperatureSum(N, K, temperatures) {
  let maxSum = -Infinity; // 최대 합계를 저장할 변수를 초기화합니다.
  for (let i = 0; i <= N - K; i++) {
    let currentSum = 0;
    for (let j = i; j < i + K; j++) {
      currentSum += temperatures[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
