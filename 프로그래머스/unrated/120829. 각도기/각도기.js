function solution(angle) {
    const answer = [0,90, 91, 180].filter(x=> x<=angle).length
    return answer;
}