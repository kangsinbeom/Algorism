function solution(price, money, count) {
    let answer = -1;
    let list = []
    for (i = 1; i <= count; i++) {
        list.push(i * price)
    }
    let total = list.reduce((accur, curr) => accur += curr)
    answer = (total > money) ? total - money : 0
    return answer
    
}