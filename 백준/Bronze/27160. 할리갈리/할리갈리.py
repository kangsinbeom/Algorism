
N = int(input())

def solution_1(N):
    dict_1 = {}
    for i in range(N):
        fruit, amount = input().split(" ")
        amount = int(amount)
        keys = dict_1.keys()
        if fruit in keys:
            dict_1[fruit] += amount
        else:
            dict_1[fruit] = amount
    if 5 in dict_1.values(): 
        return 'YES' 
    return 'NO'

print(solution_1(N))

    