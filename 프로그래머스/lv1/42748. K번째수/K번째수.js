function solution(array, commands) {
    let answer = []
    for(const i of commands) {
        let newArr = []
        for (let j = i[0] - 1; j < i[1]; j++) {
            newArr.push(array[j])
        }
        answer.push(newArr.sort((a, b) => a-b)[i[2] - 1])
    }
    return answer
}