function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const obj = {}
    id_list.map(user => obj[user] = [])
    report.map(item => {
        const [report, reported] = item.split(" ")
        if (!obj[reported].includes(report)) {
            obj[reported].push(report)    
        }
    })
    for (key in obj) {
        if (obj[key].length >= k) {
            obj[key].map(user => answer[id_list.indexOf(user)] += 1)   
        }
    }
    return answer;
}