const solution = (array) => {
    const answer = array.sort((a, b) => a - b)[parseInt(array.length / 2)]
    return answer 
}