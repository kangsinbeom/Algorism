function solution(n) {
    const answer = Array(n).fill(0).map((value, index) => index + 1).filter(value => value % 2 !== 0)
    return answer;
}