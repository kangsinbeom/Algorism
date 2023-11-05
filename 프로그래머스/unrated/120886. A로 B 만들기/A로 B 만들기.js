function solution(before, after) {
    let array = after
    for (i of before) {
        if (array.includes(i)) {
            array = array.replace(i, "")
        }
    }
    return array ? 0 : 1;
}