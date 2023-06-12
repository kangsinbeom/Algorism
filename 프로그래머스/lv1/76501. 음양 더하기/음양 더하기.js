function solution(absolutes, signs) {
    for (let i = 0; i < absolutes.length; i++) {
        if (!signs[i]) {
            absolutes[i] = Number("-" + absolutes[i])
        }
    }
    let result = absolutes.reduce(function(sum, currValue) {
        return sum + currValue
    })

    return result
}