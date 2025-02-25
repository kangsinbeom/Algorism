import sys
def solution():
    result = ""
    lines = []
    for _ in range(5):
        lines.append(list(sys.stdin.readline().rstrip()))   
    maxLen = max([len(line) for line in lines])
    for i in range(maxLen):
        for j in range(5):
            if (len(lines[j]) < i + 1):
                continue
            result += lines[j][i]
    return result
print(solution())