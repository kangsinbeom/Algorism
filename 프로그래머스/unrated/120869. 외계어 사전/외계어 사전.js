function solution(spell, dic) {
    const answer = dic.map(x=>[...x].sort().join("")).filter(x=> x.includes(spell.sort().join("")))
    return answer.length ? 1 : 2;
}