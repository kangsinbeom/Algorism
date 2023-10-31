function solution(numbers) {
    var answer = numbers.sort((a, b) => a- b);
    const max = Math.max(answer[0]*answer[1], answer[answer.length -1]*answer[answer.length -2])
    return max
}