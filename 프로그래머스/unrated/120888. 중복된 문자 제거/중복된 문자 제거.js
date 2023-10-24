function solution(my_string) {
    var answer = [...my_string].reduce((prev, curr) =>prev.includes(curr) ? prev : prev + curr , "");
    return answer;
}