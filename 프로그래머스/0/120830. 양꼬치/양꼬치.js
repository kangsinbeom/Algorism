function solution(n, k) {
    let a = 0
    if (n >= 10) {
        k -= ~~(n / 10)
        k = Math.max(0, k)
    }
    
    return 12000 * n + 2000 * k;
}