const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function solution(s, n) {
    var answer = s.split("").map(str => {
        if(str === " ") {
            return " "
        } else {
            const upperStr = str.toUpperCase()
            let index = array.indexOf(upperStr) + n
            if (index >=array.length) index -= 26
            if (str === upperStr) {
                return array[index]   
            } else {
                return array[index].toLowerCase()
            }    
        }
        
        
    })
    return answer.join("");
}