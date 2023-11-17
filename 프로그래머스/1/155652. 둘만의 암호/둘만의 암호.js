function solution(s, skip, index) {
//     const obj = {}
    // const a = [...'abcdefghijklmnopqrstuvwxyz'].filter(x => !skip.includes(x)).map((x, i)=>obj[x] = i)
//     const b = [...s].map(x=> obj[x] + index).map(x => x >= Object.keys(obj).length ? Object.keys(obj).length - x  : x)
    const a = [...'abcdefghijklmnopqrstuvwxyz'].filter(x => !skip.includes(x))
    const b = [...s].map(x => a[(a.indexOf(x) + index) % a.length]).join("")
    console.log(b)
    
    return b;
}