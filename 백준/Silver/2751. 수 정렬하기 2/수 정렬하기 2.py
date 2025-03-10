import sys
def solution():
    N = int(input())
    array = sorted([int(sys.stdin.readline().rstrip()) for _ in range(N)])
    for i in array:
        print(i)
solution()