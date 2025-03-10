def solution():
    N = input()
    array = []
    for i in N:
        array.append(i)
    array.sort(reverse=True)
    print("".join(array))
solution()