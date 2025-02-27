def solution():
    while True:    
        N = input()
        if N == '-1':
            break
        result = f'{N} = 1'
        약수들 = [1, ]
        for i in range(2, int(N)):
            if int(N) % i == 0:
                약수들.append(i)
                result += f' + {str(i)}'
        print(f"{N} is NOT perfect." if sum(약수들) != int(N) else result)    
solution()