import math
def solution():
    N = int(input())
    values = list(map(int, input().split()))
    count = N
    for value in values:
        if value == 1:
            count -= 1
            continue
        for i in range(2, int(math.sqrt(value)) + 1):
            if value % i == 0:
                count -= 1
                break
    return count
print(solution())