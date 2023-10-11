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
    const obj = {
        2 : "0",
        0: "5",
        5: "2"
    }
    const answer = [...rsp].map(x => obj[x]).join("")
    return answer;
}