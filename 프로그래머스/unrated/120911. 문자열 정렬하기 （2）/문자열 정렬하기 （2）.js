function solution(my_string) {
    var answer = [...my_string].map(x=> x.toLowerCase()).sort().join("");
    return answer;
}