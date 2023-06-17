function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n)
      
    return  Number.isInteger(num) ? (num + 1) ** 2 : -1;
}