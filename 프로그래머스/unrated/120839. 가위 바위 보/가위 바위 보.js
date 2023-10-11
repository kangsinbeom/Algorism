function winner(string) {
    switch (string) {
        case "2":
            return "0"
        case "0":
            return "5"
        case "5":
            return "2"
    }
}


function solution(rsp) {
    const answer = rsp.split("").map(x => winner(x)).join("")
    return answer;
}