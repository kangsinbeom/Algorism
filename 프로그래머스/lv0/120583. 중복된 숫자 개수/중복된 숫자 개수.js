function solution(array, n) {
    let answer = 0
    for (i of array) {
        i === n && answer ++   
    }
    return answer;
}