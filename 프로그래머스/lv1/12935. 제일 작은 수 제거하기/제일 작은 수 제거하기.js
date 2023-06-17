function solution(arr) {
    let min = Math.min(...arr)
    newArr = arr.filter(e => e !== min)
    newArr.length === 0? newArr.push(-1) : newArr;

    return newArr
}