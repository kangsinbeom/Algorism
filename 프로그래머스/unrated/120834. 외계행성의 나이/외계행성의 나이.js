function solution(age) {
    const answer = age.toString().split("").map(a => String.fromCharCode(parseInt(a) + 97)).join("")
    return answer;
}