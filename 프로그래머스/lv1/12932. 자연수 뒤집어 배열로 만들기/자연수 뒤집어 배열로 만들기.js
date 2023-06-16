function solution(n) {
    n = n.toString()
    let list = [...n]
    let list2 = list.map(x => Number(x))
    list2 = list2.reverse()
    var answer = [];
    return list2;
}