function gcd(a, b) {
    while (b) {
        let t = a;
        a = b;
        b= t% b;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

function solution(n) {
    const answer = lcm(6, n) / 6;
    
    return answer;
}

// 최소 공배수 문제인가?  최대공약수 풀었자너 이건 못푸니?