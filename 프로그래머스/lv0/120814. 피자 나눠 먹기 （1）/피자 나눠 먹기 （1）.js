function solution(n) {
    const answer  = n < 7 ? 1 : Math.ceil(n / 7)
    return answer;
}