function solution(dots) {
    const a = [...new Set(dots.map(x=>x[0]))]
    const b = [...new Set(dots.map(x=>x[1]))]
    let [x, y] = [0, 0]
    let [sumx, sumy] = [-dots[0][0], -dots[0][1]]
    for (let i = 0; i < dots.length; i++) {
        const a = Math.abs(dots[i][0] + sumx)
        const b = Math.abs(dots[i][1] + sumy)
        x = Math.max(a, x)
        y = Math.max(b, y)
    }
    return (Math.max(...a) - Math.min(...a)) * (Math.max(...b) - Math.min(...b)) ;
}