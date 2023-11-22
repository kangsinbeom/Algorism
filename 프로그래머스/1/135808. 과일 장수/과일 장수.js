function solution(k, m, score) {
    var answer = 0
    const box = Math.floor(score.length / m)
    const obj = {}
    score.forEach((x)=>{
        if (obj[x]) {
            return obj[x] ++    
        }
        return obj[x] = 1
    })    
    const keys = Object.keys(obj)
    console.log(box, keys)
    return answer;
}