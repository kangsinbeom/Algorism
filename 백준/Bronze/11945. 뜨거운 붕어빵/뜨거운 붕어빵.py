import sys
# 뜨거운 붕어빵 브론즈 4

"""
문제 해설
주어진 입력값에 대해서 좌 우로 뒤집힌 모양으로 출력하는 것이다.
"""

N,M = map(int, input().split(" "))

def solution_1(string):
    
    return "".join(reversed(list(string)))


for _ in range(N):
    string = input()
    print(solution_1(string))
# Runtime Error