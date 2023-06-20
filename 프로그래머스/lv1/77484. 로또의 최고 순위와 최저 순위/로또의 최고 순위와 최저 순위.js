function solution(lottos, win_nums) {
    let countZero = lottos.filter(x => x===0).length;  //0의개수
    let sameNum = lottos.filter(x => win_nums.includes(x)).length; //같은 개수
    let num1 = 7 - (sameNum + countZero === 0 ? 1 : sameNum + countZero); 
    let num2 = 7 - (sameNum === 0? 1 : sameNum);
    
    let answer = [num1, num2]
    
    
    return answer;
}