function solution(t, p) {
    let arrT = [...t]
    const num = p.length
    let newArr = []
    let i = 0;
    while (i + num <= arrT.length) {
        newArr[i] = arrT.slice(i, i + num).join("");
        i++
    }
    answer = newArr.filter(e => e <= p )
    return answer.length 
}