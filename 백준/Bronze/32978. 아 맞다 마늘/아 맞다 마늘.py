# 백준 아 맞다 마늘 브론즈 2

"""
2개의 배열을 비교해서 없는 하나를 찾아내는 문제로 순열탐색으로 실행할 경우 재료의 종류가 최대 1000개이므로
상당히 오래걸릴 것 같다. 비교를할 때 어떻게 해야 최소화를 할 수 있는지 생각해보자
문제에서 한 번씩만 주어진다는 표현을 보니 set()을 사용하진 않을 것 같다. map을 사용해서 value의 값이 1인 것을 찾아내는 건 어떨까?
아니면 리스트에 sort()를 이용해서 이분탐색을 사용하는 방식은?
"""
def 이분탐색(lst1, lst2):
    start = 0
    end = len(lst1) - 1
    while start <= end:
        half = (end + start) // 2
        if half >= len(lst2) or lst1[half] != lst2[half]:
            end = half - 1
        else:
            start = half + 1
    return start

"""
이해를 해보자 end값이 처음에는 4야 그리고 start가 0이야 이 때는 half값은 2야 그러면 index2의 값은 서로 달라 그러니깐 뒤의 값은 뺄 수 있어
그래서 end값에 half값을 넣었어 그럼 2이 end이고 start가 0이야 이때 half는 1이야 그렇다면 index1의 값은 서로 같아
그러니깐 start를 땡길 수 있어 start가 2이고 end가 2니깐 정답은 2야
"""


def solution1():
    N = int(input())
    total = sorted(input().split(" "))
    use = sorted(input().split(" "))
    index = 이분탐색(total, use)
    return total[index]
print(solution1())