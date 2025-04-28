import sys
input = sys.stdin.readline

def solution():
    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    pointer1, pointer2 = 0, 0
    numbers_sum = numbers[0]
    result = 0
    while True:
        if numbers_sum == M:
            result += 1
        
        if numbers_sum >= M:
            pointer1 += 1
            numbers_sum -= numbers[pointer1 - 1]
        else:
            if pointer2 == N - 1:
                break
            pointer2 += 1
            numbers_sum += numbers[pointer2]
    return result
print(solution())