function solution(n) {
    let answer = 0;
    let i = 0;
    while (i <= n) {
        if (n % i === 0){answer += i;} 
        i++
    }
    // answer = arr.reduce((accur, curr) => accur += curr)
    return answer;
}