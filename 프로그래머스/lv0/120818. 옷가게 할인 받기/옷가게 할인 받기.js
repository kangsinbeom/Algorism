function solution(price) {
    if (price >= 100000 && price < 300000) {
        price = Math.floor(price * 0.95)
    } else if (price >= 300000 && price < 500000) {
        price = ~~(price * 0.9)
    } else if (price >= 500000) {
        price = price - (price * 0.2)
    } else {
        price = price
    }
    return price;
}