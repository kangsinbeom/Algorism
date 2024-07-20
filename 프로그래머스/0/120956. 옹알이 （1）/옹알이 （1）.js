function solution(babbling) {
    var answer = [];
    const possible = ["aya", "ye", "woo", "ma"]
    babbling.forEach((str)=> {
        let target = str
        possible.forEach((say) => {
            if (target.includes(say)) {
                target = target.replace(say, ' ')
            }
        })
        answer.push(target)
    })
    return babbling.length - answer.map((str) => str.trim()).filter((str) => !!str).length;
}