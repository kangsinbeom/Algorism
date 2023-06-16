function solution(n) {
    var answer = 0;
    n = n.toString()
    let list = [...n]
    let list2 = list.map(x => Number(x)).sort().reverse()
    answer = Number(list2.join(""))
    return answer;
}
