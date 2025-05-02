
def solution():
    N = int(input())
    times = sorted(list(map(int, input().split())))
    total = 0
    result = 0
    for i in range(N):
        total += times[i]
        result += total
    return result
print(solution())
