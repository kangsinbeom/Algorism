function solution(n) {
    var answer = n.toString().split("").reduce((accur, curr) => parseInt(accur) + parseInt(curr), 0)
    return answer;
}