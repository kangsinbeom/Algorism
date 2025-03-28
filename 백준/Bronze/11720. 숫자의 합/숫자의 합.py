def solution():
    N = int(input())
    numbers = input()
    sum = 0;
    for i in numbers:
        sum += int(i)
    return sum
print(solution())