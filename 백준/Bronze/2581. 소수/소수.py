def is_prime(num):
    if num <= 1:
        return False
    i = 2
    while i ** 2 <= num:
        if num % i == 0:
            return False
        i += 1
    return True

# 소수 브론즈 2
def solution():
    N = int(input())
    M = int(input())
    array1 = [i for i in range(N, M + 1) if is_prime(i)]
    if len(array1) > 0:
        print(sum(array1))
        print(array1[0])
    else: print(-1)
solution()