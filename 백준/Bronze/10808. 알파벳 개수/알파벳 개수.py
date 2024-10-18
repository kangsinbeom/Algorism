input = list(input())
listA = [0] * 26

for x in input:
    index = ord(x) - 97
    listA[index] += 1

print(*listA)


