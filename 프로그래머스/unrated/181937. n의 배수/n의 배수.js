function solution(num, n) {
    var answer = parseInt(num / n) === num / n ? 1 : 0;
    return answer;
}