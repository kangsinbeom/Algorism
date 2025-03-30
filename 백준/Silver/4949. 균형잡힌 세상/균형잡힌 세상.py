
def solution():
    while True:
        string = input()
        if string == '.':
            break
        stack = []
        balence = True
        for char in string:
            if char == '(' or char == '[':    
                stack.append(char)
            elif char == ']':
                # stack이 비어있는 경우
                if len(stack) == 0 or stack[-1] != '[':
                    balence = False
                    break
                stack.pop()
            elif char == ')':
                if len(stack) == 0 or stack[-1] != '(':
                    balence = False
                    break
                stack.pop()
        if len(stack) != 0:
            balence = False
        print('yes' if balence else 'no')
solution()