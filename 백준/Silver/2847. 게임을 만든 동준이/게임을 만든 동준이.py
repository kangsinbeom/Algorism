# 실버 4 게임을 만든 동준이
import sys
input = sys.stdin.readline

def solution():
    N = int(input())
    scores = []
    for _ in range(N):
        value = int(input())
        scores.append(value)
    count = 0
    for i in range(1, N):
        if scores[-i] <= scores[-(i + 1)]:
            value = scores[-(i + 1)] - scores[-i] + 1
            count += value
            scores[-(i + 1)] -= value 
    return count
print(solution())