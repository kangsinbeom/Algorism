import sys

def beginner():
    N = int(sys.stdin.readline())
    stack = []
    
    for _ in range(N):
        action = sys.stdin.readline().split()

        if len(action) > 1:  # push X
            _, value = action
            stack.append(value)
        
        elif action[0] == 'top':  # top
            print(stack[-1] if stack else -1)
        
        elif action[0] == 'size':  # size
            print(len(stack))
        
        elif action[0] == 'empty':  # empty
            print(1 if not stack else 0)
        
        elif action[0] == 'pop':  # pop
            print(stack.pop() if stack else -1)

beginner()
