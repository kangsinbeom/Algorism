N = int(input())

def solution_1(N):
    dict_1 = {}
    for i in range(N):
        fruit, amount = input().split(" ")
        amount = int(amount)
        if fruit in dict_1:  # keys()를 사용할 필요 없이 바로 확인
            dict_1[fruit] += amount
        else:
            dict_1[fruit] = amount
    if 5 in dict_1.values(): 
        return 'YES' 
    return 'NO'

print(solution_1(N))