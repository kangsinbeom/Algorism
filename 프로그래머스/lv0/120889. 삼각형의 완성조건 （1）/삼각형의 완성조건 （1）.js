function solution(sides) {
    const array = sides.sort((a,b) => a -b);
    const answer = array[0] + array[1] > array[2] ? 1 : 2
    return answer;
}