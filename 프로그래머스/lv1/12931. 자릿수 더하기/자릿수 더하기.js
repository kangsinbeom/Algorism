function solution(n)
{
    let answer = 0;
    n = n.toString()
    let list = [...n]
    let list2 = list.map(x => Number(x))
    answer = list2.reduce((accur, curr) => accur += curr)
    return answer;
}