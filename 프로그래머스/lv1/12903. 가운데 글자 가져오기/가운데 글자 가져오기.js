function solution(s) {
    var answer = '';
    num = Math.floor(s.length / 2)
    answer = (s.length % 2 === 0)? s.slice(num - 1, num + 1): s[num];  
    
    return answer
}
