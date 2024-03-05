function solution(board, moves) {
    var answer = 0;
    const array1 = []
    moves.forEach((move)=> {
        const doll = pickup(board, move - 1)
        if (doll) {
            if (array1[array1.length - 1] === doll) {
                array1.pop()
                answer += 2
            } else {
            array1.push(doll)
        }
        } 
    })
    return answer;
}

function pickup(board, move) {
    for (let i = 0; i < board.length; i++) {
        if (board[i][move] !== 0) {
            const doll = board[i][move]
            board[i][move] = 0
            return doll
        }
    }
}