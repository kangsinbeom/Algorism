function solution(a, b) {
    var answer = `2016-${a}-${b}`;
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const dayOfWeek = week[new Date(answer).getDay()];
    return dayOfWeek
    return answer;
}