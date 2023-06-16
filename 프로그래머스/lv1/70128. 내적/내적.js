function solution(a, b) {
    let answer;
    let list = []
    for (let i =0; i < a.length; i++) {
        list[i] = a[i] * b[i];
    }
    answer = list.reduce((accur, curr) => accur += curr)
    return answer;
}