function solution(s) {
    let result;
    let answer = [...s]
    if (s.length === 4 || s.length === 6)  {
        let answer2 = answer.map(x => parseInt(x))
        result = !answer2.includes(NaN) ? true : false;
        return result;    
    } else {
        return false
    }
    
}