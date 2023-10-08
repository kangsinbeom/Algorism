function solution(my_string, n) {
    const newArray = [...my_string].map(a => a.repeat(n)).join('') 
    return newArray;
}