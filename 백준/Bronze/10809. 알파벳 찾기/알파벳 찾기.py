S =  list(input().lower())


def alpha(S):
    list_1 = []
    for i in range(26):
        list_1.append(-1)
    for i in S:
        list_1[ord(i) - 97] = S.index(i)
    result = " ".join(str(s) for s in list_1)
    return result
print(alpha(S))
