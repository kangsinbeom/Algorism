def solution():
    N, price = map(int, input().split())
    count = 0
    coins = []
    for _ in range(N):
        coins.append(int(input()))
    coins.sort(reverse=True)
    for coin in coins:
        if price // coin > 0:
            count += price  // coin
            price -= (price  // coin) * coin
        if price == 0:
            break;
    return count
print(solution())