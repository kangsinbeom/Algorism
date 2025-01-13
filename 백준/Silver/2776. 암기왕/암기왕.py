import sys

test_n = int(input())

# 입력값 읽기
for _ in range(test_n):
    a = int(sys.stdin.readline().strip())
    b = set(map(int, sys.stdin.readline().strip().split()))
    c = int(sys.stdin.readline().strip())
    d = list(map(int, sys.stdin.readline().strip().split()))
    
    def solution(a, b, c, d):
        # a는 사용되지 않음 (단순 테스트 케이스 수)
        for i in d:
            if i in b:
                print(1)
            else:
                print(0)

    solution(a, b, c, d)
