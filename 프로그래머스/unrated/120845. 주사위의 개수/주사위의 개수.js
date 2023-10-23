function solution(box, n) {
    var answer = box.map(x => Math.floor(x / n)).reduce((accur, curr) => accur * curr, 1);
    return answer;
}