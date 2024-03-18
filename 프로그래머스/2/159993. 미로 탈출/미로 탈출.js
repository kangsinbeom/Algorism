
function solution(maps) {
    let cMaps = maps.map((e)=>[...e].map(a=>a))
    const bfs = (start, init = 0) => {
        cMaps[start[0]][start[1]] = init
        const [w, h] = [maps.length, maps[0].length],
              queue = [start]
        const [dirX, dirY] = [[0, 0, -1, 1], [-1, 1, 0, 0]]
        while (queue.length) {
            const [x, y] = queue.shift()
            for (let i =0; i < 4; i++) {
                const [dx, dy] = [x + dirX[i], y + dirY[i]]
                if (dx < 0 || dy < 0 || dx >= w || dy >= h) continue
                if (cMaps[dx][dy] === 'X' || cMaps[dx][dy] < 10000) continue
                else {
                    cMaps[dx][dy] = cMaps[x][y] + 1
                    queue.push([dx, dy])
                }
            }
        }
        return cMaps
    }
    
    
    const info = maps.reduce((acc, e, i)=> {
        for (let j= 0; j < e.length; j++) {
            if (e[j] === 'S' || e[j] === 'E' ||  e[j] === 'L') {
                acc[e[j]] = [i, j]
            }
        }
        return acc // 누적 객체를 반환하는 것이 중요한 것이구나
    }, {})
    let t = bfs(info.S)[info.L[0]][info.L[1]]
    if (t !== "L") {
        cMaps = maps.map((e)=>[...e].map(a=>a))
        t = bfs(info.L, t)[info.E[0]][info.E[1]]
    } else return -1
    return t !== 'E' ? t : -1
}
