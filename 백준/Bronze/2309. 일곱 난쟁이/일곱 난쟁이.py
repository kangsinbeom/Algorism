import sys
input= sys.stdin.readline
def solution():
    lst = []
    for _ in range(9):
        lst.append(int(input()))
    lst.sort()
    i = 0
    j = 1
    while True:
        new_list = lst[:]
        new_list.pop(j)
        new_list.pop(i)
        # print(new_list, lst, i, j)
        if sum(new_list) == 100:
            break
        if i == 8:
            break
        if j == 8:
            i += 1
            j = i + 1
            continue
        j += 1
        
    lst.pop(j)
    lst.pop(i)
    for i in range(7):
        print(lst[i])
solution()

