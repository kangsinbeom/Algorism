def solution():
    chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    N, B = input().split()
    result = 0
    for index, value  in enumerate(N[::-1]):
        result += (chars.index(value) * (int(B) ** index))        
    return result
print(solution())