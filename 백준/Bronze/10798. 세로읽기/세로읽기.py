def 라인맞추기(str, maxLen):
    if len(str) < maxLen:
        return str + " "*(maxLen - len(str)) 
    return str
def solution():
    result = ""
    lines = []
    for _ in range(5):
        line = input()
        lines.append(line)
    maxLen = max([len(line) for line in lines])
    lines = [라인맞추기(line, maxLen) for line in lines]
    
    for i in range(maxLen):
        for j in range(5):
            if lines[j][i] != " ":
                result += lines[j][i]
    return result
print(solution())
