const sol = (str) => {
    const answer = str.split(" = ")
    const array1 = answer[0].split(" ")
    let i = 0
    let a = 1
    for (x of array1) {
        if (x === "-") {
            a *= -1
            continue
        } else if (x === "+") {
            continue
        }
        i += Number(x)*a
    }
    return i == answer[1] ? "O" : "X"
}

function solution(quiz) {
    var answer = quiz.map(x=> sol(x));
    
    return answer;
}