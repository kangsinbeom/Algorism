function solution(array) {
    var answer = array.reduce((a, b)=>a + String(b).split("7").length -1, 0)
    return answer;
}