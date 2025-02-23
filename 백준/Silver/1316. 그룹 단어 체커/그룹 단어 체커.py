
def solution():
    N = int(input())
    count = N
    for _ in range(N):
        word = input()
        # 여기서 len(word) - 1하는 이유는 word[i+1]이 word의 길이를 넘어갈 수 있으니깐 그 전까지만 하는 것임
        for i in range(len(word) - 1):
            if word[i] == word[i+1]:
                continue
            elif word[i] in word[i + 1:]:
                count -= 1
                break
    return count
     
print(solution())