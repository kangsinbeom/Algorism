function solution(left, right) {
    const arr = [...Array(right+1).keys()].slice(1);
    const newArr = arr.filter(e => e >= left)
    const answer = newArr.map(e => numYacksu(e)).reduce((a, b) => a += b)
    
    
    return answer;
}

const numYacksu = (n) => {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {count++}
    }
    return count % 2 === 0 ? n: -n; 
}   