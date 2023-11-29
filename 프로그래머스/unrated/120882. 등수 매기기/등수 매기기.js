
function solution(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
  	
  	let sorted3 = avg.slice().sort((a,b)=>b-a);
  	return avg.map(v => sorted3.indexOf(v) + 1);
}