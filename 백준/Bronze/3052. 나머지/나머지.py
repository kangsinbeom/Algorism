def solution():
    numbers = set()
    for _ in range(10):
        number = int(input());
        numbers.add(number % 42)
    return len(numbers)
print(solution())
