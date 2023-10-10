function solution(angle) {
    let answer = 0;
    if (angle % 90 == 0) {
        answer = angle === 90 ? 2 : 4
        return answer
    } 
    answer = angle > 90 ? 3 : 1
    return answer;
}