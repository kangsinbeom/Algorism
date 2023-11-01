function solution(arr1, arr2) {
    const answer = []
    for (let i = 0; i < arr1.length; i++) {
       answer.push(arr1[i].map((x, t)=> x + arr2[i][t] )) 
    }
    return answer;
}