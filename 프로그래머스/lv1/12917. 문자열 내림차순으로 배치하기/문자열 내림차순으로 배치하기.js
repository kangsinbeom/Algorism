function solution(s) {
    var answer = '';
    let arr = [...s];
    let newArr = arr.map(e => e.charCodeAt()).sort((a, b) => b - a)
    let listArr = newArr.map(e => String.fromCharCode(e)).join("")
    return listArr;
}