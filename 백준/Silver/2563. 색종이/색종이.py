def solution():
    N = int(input())
    result = 0
    array = [[0]* 100 for _ in range(100)]
    for _ in range(N):
        x, y = map(int, input().split())
        for _x in range(x, x + 10):
            for _y in range(y, y + 10):
                array[_x][_y] = 1
    for k in range(100):
        result += array[k].count(1)
    return result
print(solution())