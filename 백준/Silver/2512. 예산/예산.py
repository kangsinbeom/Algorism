def solution():
    N = int(input())
    lst = list(map(int, input().split()))
    M = int(input())
    left = 0
    right = max(lst)
   
    while (left <= right):
        mid = (left + right) // 2
        new_lst = [mid if x > mid else x for x in lst]
        if sum(new_lst) > M:
            right = mid - 1
        else:
            left = mid + 1

    return right
print(solution())
