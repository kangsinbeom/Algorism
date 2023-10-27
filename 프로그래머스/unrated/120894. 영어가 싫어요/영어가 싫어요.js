function solution(numbers) {
    const array1 = "zero one two three four five six seven eight nine".split(" ")
    .reduce((a, b, i) => a.replaceAll(b, i) , numbers)
    return Number(array1);
}