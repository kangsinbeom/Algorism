def is_same_color(board, spot):
    dirs = ((-1, 0), (0, 1), (1, 0), (0, -1))
    r, c = spot
    color = board[r][c]
    count = 0
    for dir in dirs:
        dr1, dc1 = dir
        if 0 <=r+dr1 < len(board) and 0<= c+dc1 < len(board):
            if color == board[r+dr1][c+dc1]:
                count += 1
    return count    

def solution(board, h, w):
    spot = (h, w)
    answer = is_same_color(board, spot)
    
    
    return answer