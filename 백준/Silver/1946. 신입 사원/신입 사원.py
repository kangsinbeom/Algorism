import sys
input = sys.stdin.readline

def solution():
    T = int(input())
    for _ in range(T):
        N = int(input())
        lst = []
        for _ in range(N):
            # 정렬하는 방식에서 ()튜플?을 이용한다면 sort()를 사용해서 정렬을 할 수 있음!
            s, m = map(int, input().split())
            lst.append((s, m))
        lst.sort()
        max = N + 1
        count = 0
        for s, m in lst:
            if max > m:
                max = m
                count += 1
        print(count)    
solution()