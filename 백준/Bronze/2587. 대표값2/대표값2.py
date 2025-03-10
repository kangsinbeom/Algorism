import sys
def solution():
    array = sorted([int(sys.stdin.readline().rstrip()) for _ in range(5)])
    print(sum(array) // 5)
    print(array[2])
solution()