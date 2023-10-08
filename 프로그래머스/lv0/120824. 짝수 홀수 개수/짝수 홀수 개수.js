function solution(num_list) {
    const even = num_list.filter(v => v% 2).length
    const odd = num_list.length - even
    
    return [odd, even];
}