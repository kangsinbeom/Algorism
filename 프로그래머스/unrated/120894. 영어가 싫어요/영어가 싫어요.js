function solution(numbers) {
    const array1 = "zero one two three four five six seven eight nine".split(" ")
    let answer = numbers
    for (let i = 0; i < array1.length; i++) {
        answer = answer.split(array1[i]).join(i)
    }
    
    return Number(answer);
}