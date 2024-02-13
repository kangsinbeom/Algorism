function solution(dartResult) {
    const state = { star:'*', oops:'#', Single:'S', Double:'D', Triple:'T'};
    let score = 0, scores = []
    for (let i= 0; i < dartResult.length; ++i) {
        if (!isNaN(dartResult[i])) {
            score = +dartResult[i-1]  === 1 ? 10 : +dartResult[i]
        } else {
            switch(dartResult[i]) {
                case state.Single:
                    scores.push(score)
                    break;
                case state.Double:
                    scores.push(score ** 2)
                    break;
                case state.Triple:
                    scores.push(score ** 3)
                    break;
                case state.star:
                    if (scores.length -2 >= 0) {
                        scores[scores.length -2] *= 2
                    }
                    scores[scores.length - 1] *= 2;
                    break;
                case state.oops:
                    scores[scores.length - 1] *= -1
                    break;
            }
        }
    }
    return scores.reduce((a, b)=> a += b)
}