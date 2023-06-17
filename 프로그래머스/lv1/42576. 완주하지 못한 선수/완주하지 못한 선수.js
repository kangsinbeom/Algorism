function solution(participant, completion) {
    var answer;
    participant = participant.sort()
    completion = completion.sort()
    let i = 0 
    while (participant[i] === completion[i]) {
        i++;
    }
    answer = participant[i]
    return answer;
}