function solution(keymap, targets) {
    var answer = []
    const map = new Map();
    keymap.forEach((key)=>{
        for (let i = 0; i < key.length; i++) {
            if (!map.has(key[i]) || map.get(key[i]) > i + 1) map.set(key[i], i + 1)    
        }
    })
    targets.forEach((target)=>{
        const result = [...target].reduce((a, b) =>a + map.get(b) , 0)
        answer.push(result || -1) 
    })
    return answer;
}