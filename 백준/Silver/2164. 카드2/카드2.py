from collections import deque
def solution():
    N = int(input())
    cards = deque([x for x in range(1, N + 1)])
    while len(cards) > 1:
        cards.popleft()
        cards.append(cards.popleft())
    return cards[0]
print(solution())
