function solution(n, k) {
    const yang = n * 12000
    const drink = k * 2000
    const service = parseInt(n / 10)
    const discount = service ? 2000 * service : 0
    
    var answer = yang + drink - discount;
    
    return answer;
}