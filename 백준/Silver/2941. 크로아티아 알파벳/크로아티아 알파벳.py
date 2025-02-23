croatia = ['c=','c-','dz=','d-','lj','nj','s=','z=']

def solution():
    word = input()
    for i in croatia:
        word = word.replace(i, "*")
    return len(word)
print(solution())