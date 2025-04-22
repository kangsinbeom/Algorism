import sys
input = sys.stdin.readline

def solution():
    N, M = map(int, input().split())
    A = []
    B = []
    for i in range(2):
        if i == 0: 
            A = list(map(int, input().split()))
            continue
        B = list(map(int, input().split()))
    A.extend(B)
    A.sort()
    for i in range(len(A)):
        if i + 1 != len(A):
            print(A[i], end=" ")
            continue
        print(A[i])

solution()