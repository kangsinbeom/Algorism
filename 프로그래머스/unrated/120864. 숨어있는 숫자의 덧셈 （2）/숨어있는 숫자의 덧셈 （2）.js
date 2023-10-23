function solution(my_string) {
    var answer = my_string.replace(/[A-z]/g, " ").split(" ").reduce((a, b) => Number(b) ? a + Math.floor(b) : a, 0)
    
    return answer;
}