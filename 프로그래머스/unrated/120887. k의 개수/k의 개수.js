function solution(i, j, k) {
    var answer = Array.from({length: j}, (_, i)=> i + 1).slice(i - 1).filter(x=> String(x).includes(k)).join("").split(k).length - 1;
    return answer;
}