function solution(s) {
    var answer = '';
    const words = s.split(" ")
    words.forEach((word) => {
        for(let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                answer += word[i].toUpperCase() 
            } else {
                answer += word[i].toLowerCase() 
            }
        }
        if (answer.length !== s.length) answer += " "
    })
    return answer;
}