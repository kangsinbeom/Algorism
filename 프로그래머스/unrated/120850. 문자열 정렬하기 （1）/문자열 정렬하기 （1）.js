function solution(my_string) {
    var answer = my_string.split("").filter(x => parseInt(x) || x === "0").map(x => Number(x)).sort((a, b) => a -b);
    return answer;
}