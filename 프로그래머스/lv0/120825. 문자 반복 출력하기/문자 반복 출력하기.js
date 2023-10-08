function solution(my_string, n) {
    const newArray = [] 
    for (a of [...my_string]) {
        newArray.push(a.repeat(n))
    }
    return newArray.join("");
}