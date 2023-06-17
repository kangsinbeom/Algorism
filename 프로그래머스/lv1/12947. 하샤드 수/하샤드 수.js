function solution(x) {
    var answer = true;
    let arr = [...x.toString()];
    let arr2 = arr.map(x => Number(x));
    const num = arr2.reduce((accur, curr) => accur += curr);
    
    return x % num === 0? true: false;
}