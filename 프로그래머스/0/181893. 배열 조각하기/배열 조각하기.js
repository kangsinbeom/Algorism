function solution(arr, query) {
    const a = []
    const answer = query.map((query, idx) => {
        if (idx % 2 === 0) {
            console.log('짝수')
            arr = arr.slice(0 , query + 1)
        } else {
            console.log('홀수')
            arr = arr.slice(query)
        }
        console.log(arr)
    });
    return arr;
}