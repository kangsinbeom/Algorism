function solution(my_string) {
    var answer = [...my_string].filter(x=> parseInt(x)).reduce((accur, curr) => accur + parseInt(curr), 0);
    return answer;
}