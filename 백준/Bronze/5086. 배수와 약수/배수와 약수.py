def solution():
    # 연산의 횟수가 정확히 정해지지 않았으므로 while
    while True:
        a, b = map(int, input().split())
        # 탈출 구문
        if a + b == 0:
            break
        # 둘 중에 큰 수, 작은 수를 먼저 구해야한다.
        maxValue = max(a, b)
        minValue = min(a, b)
        # 이후 큰수로 작은 수를 나머지연산을 했을 때 나머지가 없다면 둘은 neither관계가 아니다.
        if not (maxValue % minValue == 0):
            print('neither')
            continue;
        print('factor' if maxValue == b else 'multiple')
solution()