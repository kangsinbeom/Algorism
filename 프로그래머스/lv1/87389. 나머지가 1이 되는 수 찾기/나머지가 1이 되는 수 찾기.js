function solution(n) {
    x = (n-1);
    list = [];
    for (let i = 1; i <= x; i++) {
        x % i == 0 && list.push(i)
    }
  
    return list[1];
}