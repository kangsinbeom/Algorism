function solution(code) {
    let mode = 0
    var answer = [...code].reduce((acc, cur, idx) => {
        if (cur === '1') {
            mode = mode ? 0 : 1
            return acc
        }
        if (!mode && (idx % 2 === 0)) {
            return acc + cur
        } else if (mode && (idx % 2 !== 0)) {
            return acc + cur
        } 
        return acc
    }, '');
    return  answer ? answer :  'EMPTY';
}