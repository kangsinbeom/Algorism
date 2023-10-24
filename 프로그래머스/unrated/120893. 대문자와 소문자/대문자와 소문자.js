function solution(my_string) {
    var answer = [...my_string].map(x => x.toLowerCase() === x ? x.toUpperCase() : x.toLowerCase()).join("")
    return answer;
}