# 문자열 반복 2675 브론즈 2

def solution_1():
    n = int(input())
    for _ in range(n):
        k, string = input().split(" ")
        k = int(k)
        answer = ''
        for i in string:
            answer += i * k
        print(answer)
solution_1()
