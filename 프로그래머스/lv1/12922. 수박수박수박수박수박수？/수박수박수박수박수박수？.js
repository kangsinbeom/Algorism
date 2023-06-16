function solution(n) {
    var answer = '';
    answer = "수박".repeat(Math.floor(n / 2))
     
    return n % 2 == 0 ? answer : answer +"수";
}