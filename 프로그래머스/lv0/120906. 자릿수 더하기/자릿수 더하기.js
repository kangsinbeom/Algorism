function solution(n) {
    var answer = n.toString().split("").reduce((accur, curr) => accur + parseInt(curr), 0)
    return answer;
}