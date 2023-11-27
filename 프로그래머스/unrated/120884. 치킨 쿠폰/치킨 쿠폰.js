
function solution(chicken) {
    let answer = 0;
    const cal = (number) => {
        if (number / 10 < 1) {
            return answer
        }
        const restcp = number % 10
        const chicken = (number-restcp) / 10
        answer += chicken
        cal(chicken + restcp)
    }
    cal(chicken)
    return answer;
}