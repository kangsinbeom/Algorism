# 실버 3 먹을 것인가 먹힐 것인가
import sys
input = sys.stdin.readline

def solution():
    T = int(input())
    for _ in range(T):
        N, M = map(int, input().split())
        A = sorted(list(map(int, input().split())), reverse=True)
        B = sorted(list(map(int, input().split())), reverse=True)
        
        count = 0
        left = 0
        right = M
        i = 0

        while i < N:
            if A[i] > B[left]:        
                count += right - left
                i += 1
            else:
                left += 1
                if left == right:
                    break
        print(count)      
solution()