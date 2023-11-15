function solution(num) {
    let answer = num;
    let count = 0
    
    while (!(answer === 1)) {
        if (answer % 2 === 0) {
            answer /= 2
            count++
            continue
        } 
        answer = (answer * 3) + 1
        count++
    }
    return count >= 500 ? -1 : count;
}