function solution(id_pw, db) {
    const obj = {}
    var answer = db.map(x=>obj[x[0]] = x[1]);
    if (obj[id_pw[0]]) {
        if (id_pw[1] === obj[id_pw[0]]) return 'login'
        return 'wrong pw'
    }
    return 'fail';
}