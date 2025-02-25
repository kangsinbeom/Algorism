import sys
def solution():
    N = int(input())
    for _ in range(N):
        str1 = sys.stdin.readline().rstrip()
        sum = 0
        for i in str1:
            if i == '(':
                sum += 1
            else:
                sum -= 1
            if sum < 0:
                break
        print('YES' if sum == 0 else 'NO')
    return
solution()
