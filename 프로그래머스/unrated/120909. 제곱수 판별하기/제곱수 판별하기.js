function solution(n) {
    const numbers = [];
    for (let i = 1; i < n; i++) {
        !(n % i) && numbers.push(i) 
    }
    const answer = numbers.filter(x => x ** 2 === n)
    
    return answer.length ? 1 : 2;
}