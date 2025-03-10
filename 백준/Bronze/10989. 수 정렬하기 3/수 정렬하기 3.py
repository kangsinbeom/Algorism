import sys
def solution():
    input = sys.stdin.readline
    N = int(input())
    array = [0] * 10001
    for _ in range(N):
        num = int(input())
        array[num] += 1
    for j in range(10001):
        if array[j] != 0:
            for _ in range(array[j]):
                print(j)
solution()