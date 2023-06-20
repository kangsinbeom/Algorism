function solution(answers) {
    const first = [1, 2, 3, 4, 5]; //5
    const second = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10
    let scores = [0, 0 ,0]
    for (let i = 0; i < answers.length; i++) {
        if (first[i % 5] === answers[i]) {scores[0] ++};
        if (second[i % 8] === answers[i]) {scores[1] ++};
        if (third[i % 10] === answers[i]) {scores[2] ++};
    }
    let answer = []
    let max = Math.max(...scores)
    if (scores[0] === max) {answer.push(1)};
    if (scores[1] === max) {answer.push(2)};
    if (scores[2] === max) {answer.push(3)};
    return answer;
}