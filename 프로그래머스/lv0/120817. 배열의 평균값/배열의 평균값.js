function solution(numbers) {
    const answer = numbers.reduce((accur, curr) => accur + curr, 0) / numbers.length;
    return answer;
}