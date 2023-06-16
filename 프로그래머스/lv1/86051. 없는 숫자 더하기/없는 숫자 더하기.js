function solution(numbers) {
    let answer = 0;
    const list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let list2 = list1.filter(e => !numbers.includes(e));
    answer = list2.reduce((accur, curr, inti) => accur += curr, 0);
    
    return answer;
}