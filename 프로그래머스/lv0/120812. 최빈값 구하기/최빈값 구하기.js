function solution(array) {
    const answer = {}
    array.forEach(val => {
        answer[val] = (answer[val] ?? 0) + 1
    })

    const answerKeys = Object.keys(answer)
    answerKeys.sort((a, b) => answer[b] - answer[a])

    return answer[answerKeys[0]] === answer[answerKeys[1]] ? -1 : Number(answerKeys[0])
}