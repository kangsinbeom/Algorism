function solution(array) {
  // create object
  const obj = {};

  // loop over array
  array.forEach((number) => {
    // for each number in array,
    // if it dosen't already exist as a key on the
    // objcet, create one and set its value to 1.
    if (!obj[number]) {
      obj[number] = 1;
    } else {
      // if it already exists as key on the object,
      // increment its corresponding value.
      obj[number] += 1;
    }
  });

  // return object key with highest value.
  let highestValue = 0;
  // let highestValueKey = -Infinity;

  for (let key in obj) {
    const value = obj[key];
    if (value > highestValue) {
      highestValue = value;
      highestValueKey = Number(key); // convert key(string) back to number
    }
  }

  // 객체 내에서 가장 최고값의 value 찾기
  const maximum = Math.max(...Object.values(obj));

  // 최대값의 value를 가지고 있는 key(들)로 배열 생성. 즉 최빈값(들)을 담고 있는 새 배열 생성
  const mode = Object.keys(obj).filter((key) => obj[key] === maximum);

  return mode.length === 1 ? highestValueKey : -1;
}