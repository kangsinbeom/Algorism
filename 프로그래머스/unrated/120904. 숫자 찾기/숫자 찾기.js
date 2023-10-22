function solution(num, k) {
    var answer = [...String(num)].map(x=>Math.floor(x)).indexOf(k);
    return answer === -1 ? answer : answer + 1;
}