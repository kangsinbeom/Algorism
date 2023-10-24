function solution(array, n) {
    const answer = array.sort((a,b)=> a-b).reduce((prev, curr) =>Math.abs(prev - n) <= Math.abs(curr - n) ? prev : curr , array[0]);
    return answer
}