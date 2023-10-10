function solution(numbers, direction) {
    
    if (direction === 'right') {
        numbers.unshift(numbers[numbers.length - 1])
        numbers.pop(numbers.length -1)
        return numbers
    } else {
        numbers.push(numbers[0])
        numbers.shift(numbers[0])
        return numbers
    }
}