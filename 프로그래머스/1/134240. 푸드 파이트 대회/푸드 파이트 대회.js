function solution(food) {
    const array = food
    const answer = [0]
    while (array.length) {
        const i = array.length - 1
        const number = array.pop()
        const addNumber = Math.floor(number / 2)
        if (addNumber) {
         for (let index = 0; index < addNumber; index++) {
             answer.push(i) && answer.unshift(i)
         }   
        }
    }
    return answer.join("");
}