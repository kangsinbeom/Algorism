function solution(emergency) {
    const answer = emergency.map(a => emergency.filter(b=> b >= a ).length)
    
    
    return answer;
}