function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter(e => e % divisor == 0);
    answer.length === 0 ?
        answer.push(-1) : answer = answer.sort(function(a, b) {
        return a - b
    });
    return answer;
    
}