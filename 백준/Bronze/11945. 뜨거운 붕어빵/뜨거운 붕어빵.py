import sys

def solution_1(string):
    return "".join(reversed(list(string)))

N, M = map(int, input().split())

for _ in range(N):
    string = sys.stdin.readline().strip()
    if not string:
        continue
    print(solution_1(string))
