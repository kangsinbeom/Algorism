import sys
from collections import deque
def solution():
    N = int(input())
    queue = deque([])
    for _ in range(N):
        order = sys.stdin.readline().split()
        # push인 경우
        if len(order) == 2:
            _, value = order
            queue.append(value)
            continue
        # push가 아닌 경우에는 모두 string으로 처리
        order = order[0]
        if order == 'pop':
            if len(queue) == 0:
                print(-1)
            else:
                print(queue.popleft())
        elif order == 'size':
            print(len(queue))
        elif order == 'empty':
            if len(queue) == 0:
                print(1)
            else:
                print('0')
        elif order == 'front':
            if len(queue) == 0:
                print(-1)
            else:
                print(queue[0])
            
        elif order == 'back':
            if len(queue) == 0:
                print(-1)
            else:
                print(queue[-1])        
solution()