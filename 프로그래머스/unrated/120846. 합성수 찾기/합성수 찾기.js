const cal1 = (n) => {
    const numbers = []
    for (let i = 0; i < n; i++) {
        !(n % i) && numbers.push(i) 
    }
    return numbers.length >=3 ? true : false 
}


function solution(n) {
    
    const answer = Array.from({length: n}, (_, i) => i + 1).filter(x=> cal1(x)).length;
    return answer;
}