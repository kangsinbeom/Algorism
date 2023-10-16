function solution(my_string) {
    var answer = [...my_string].filter(x => !'aeiou'.includes(x)).join('');
    return answer;
}