function solution(num, total) {
    var answer = [];
    const a = total / num
    if (Math.floor(a) !== a) {
        const start = Math.floor(a) - (num - 2) / 2
        const end = Math.ceil(a) +  (num - 2) / 2
        return  Array.from({length: num}, (_, index) => start + index)
    } else {
        const start = a - (num - 1) / 2
        const end = a +  (num - 1) / 2
        return  Array.from({length: num}, (_, index) => start + index)
        
    }
}