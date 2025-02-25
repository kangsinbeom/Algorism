# 행렬의 덧셈을 구하는 문제

'''
입력값은 첫째줄에 행과 열이 주어진다.
그리고 입력된 행과 열을 가진 2개를 더한 새로운 행렬을 만들어 낸다.
그렇기에 행의 2배수만큼의 input을 받게 된다.

그럼 문제를 풀 때 row로 %한 나머지 값을 서로 더하면 될 것 같다.
'''
def solution():
    row, col = map(int, input().split())
    result = []
    # 0 ~ row* 2 - 1까지니깐 index값 그대로 활용하면 될 듯
    for i in range(row * 2):
        if len(result) >= row:
            # # 0이 i로 들어올 수는 절대 없음 그러니깐 그냥해도 될 듯?
            newRow = list(map(int, input().split()))
            for j in range(col):
                result[i % row][j] += newRow[j]
        else:
            result.append(list(map(int, input().split())))
    for i in result:
        print(*i)

solution()