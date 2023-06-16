function solution(s) {
    var answer = 0;
    answer = (Number(s) !== NaN) ? Number(s) : 0 - Number(s.slice(1))
    return answer;
}