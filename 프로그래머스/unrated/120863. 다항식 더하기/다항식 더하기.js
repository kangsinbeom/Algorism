function solution(polynomial) {
    var arr = polynomial.split(" + ");
    let xNumber = 0
    let number = 0
    
    arr.forEach(n=> {
        if (n.includes("x")) {
            const strNumber = n.split("x")[0] || '1'
            xNumber += +strNumber
        } else {
            number += +n
        }
    })
    const answer = []
    if (xNumber) answer.push(`${xNumber === 1 ? "" : xNumber}x`);
    if (number) answer.push(number);
    return answer.join(" + ")
}