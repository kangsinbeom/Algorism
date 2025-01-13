def solution(s):
    answer = True
    count = 0
    s = s.lower()
    for i in s:
        if i == 'p':
            count += 1
        elif i == 'y':
            count -= 1
        continue
    
    return count == 0