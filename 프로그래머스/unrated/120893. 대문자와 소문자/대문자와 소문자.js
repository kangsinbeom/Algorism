function solution(my_string) {
    var answer = [...my_string].map(x => x.charCodeAt(0)).map(x=> x< 97 ? x + 32 : x -32).map(x=> String.fromCharCode(x)).join("");
    return answer;
}