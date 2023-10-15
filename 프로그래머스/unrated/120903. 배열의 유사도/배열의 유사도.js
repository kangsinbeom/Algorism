function solution(s1, s2) {
    let array = 0
    const answer = s1.filter(x => s2.filter(y => y === x && array++))
    
    
    return array;
}