function solution(n) {
    var answer = 0;
    n = n.toString(3);
    n = [...n].reverse().join("")
    n = parseInt(n, 3);
    return n;
}