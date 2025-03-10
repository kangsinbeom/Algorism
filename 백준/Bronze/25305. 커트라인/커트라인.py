
def solution():
    _, K = map(int, input().split())
    array = sorted(map(int, input().split()), reverse=True)
    return array[K - 1]
print(solution())