# 소인수분해 브론즈 1

def solution():
    N = int(input())
    i = 2
    while i ** 2 <= N:
        if N % i == 0:
            N //= i
            print(i)
            i = 2
            continue
        i += 1
    if N > 1:
        print(N)        
solution()