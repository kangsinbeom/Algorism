import sys
# 스택 2 실버 4

def solution():
    N = int(input())
    stack = []
    for _ in range(N):
        order = sys.stdin.readline().rstrip()
        if len(order) > 1:
            _, X = list(map(int, order.split()))
            stack.append(X)
        elif order == '2':
            if len(stack) > 0:
                print(stack.pop())
            else:
                print(-1)
        elif order == '3':
            print(len(stack))
        elif order == '4':
            print(1 if len(stack) == 0 else 0)
        else:
            if len(stack) > 0:
                print(stack[-1])
            else:
                print(-1)
solution()