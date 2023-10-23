function solution(n) {
    let a = 1
    let i = 1
    while (true) {
        if (n < a) {
            console.log(a, i)
            return i - 2    
        }
        a *= i 
        i++
        console.log(a, i)
    }
}