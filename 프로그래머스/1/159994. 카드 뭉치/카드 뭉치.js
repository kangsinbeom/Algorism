function solution(cards1, cards2, goal) {
    var answer = '';
    const stack = []
    goal.forEach((el, i)=>{
        if (cards1.includes(el)) {
            stack.push(cards1.shift())
        } else if (cards2.includes(el)) {
            stack.push(cards2.shift())
        } else {
            answer = 'No'
        }
    })
    goal.forEach((el, i) => {
        if (el !== stack[i]) return answer = "No"
        answer = 'Yes'
    })
    return answer;
}