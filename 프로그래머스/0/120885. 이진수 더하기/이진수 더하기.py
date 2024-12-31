def solution(bin1, bin2):
    answer = sum = int(bin1, 2) + int(bin2, 2)
    return bin(answer)[2:]