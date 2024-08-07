function solution(n) {
    const array1 = Array(n + 1).fill(true).fill(false, 0 , 2)
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (array1[i]) {
            for (let j = i * i; j <= n; j += i) {
                array1[j] = false
            }
        }
    }
    const answer = array1.filter(e=> e).length
    return answer;
}