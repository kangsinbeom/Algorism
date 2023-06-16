function solution(arr) {
    var answer = 0;
    answer = arr.reduce((accur, curr) => accur += curr, 0) / arr.length
    return answer;
}