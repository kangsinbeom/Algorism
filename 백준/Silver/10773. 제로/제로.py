def solution():
    K = int(input())
    stack = []
    for _ in range(K):
        number = int(input())
        if (number == 0):
            stack.pop()
            continue
        stack.append(number)
    return sum(stack)

print(solution())