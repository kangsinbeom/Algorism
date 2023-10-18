function solution(my_string) {
    var answer = [...my_string].reduce((accur, curr) => Number(curr) ? accur + parseInt(curr) : accur, 0);
    return answer;
}