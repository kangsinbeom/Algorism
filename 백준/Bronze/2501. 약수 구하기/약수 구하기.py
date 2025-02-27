def solution():
    a, b = map(int, input().split())
    list1 = [1, ]
    for i in range(2, a + 1):
        if a % i == 0:
            list1.append(i)
    return list1[b - 1] if len(list1) >= b else 0
print(solution())