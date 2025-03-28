
def solution():
    array1 = [int(x) + 1 for x in range(30)];
    for _ in range(28):
        value = int(input());
        if value in array1:
            array1.remove(value)
    print(array1[0])
    print(array1[1])    
    
solution()