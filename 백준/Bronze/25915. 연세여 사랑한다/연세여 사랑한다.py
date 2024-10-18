start = input()
password = 'ILOVEYONSEI'
current = 0
answer = 0

for i in password:
    if current == 0:
        answer += abs(ord(start) - ord(i))
    else:
        answer += abs(ord(i) - current)
    current = ord(i)
    
print(answer)