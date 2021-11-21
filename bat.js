function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  } else {
    const rangeArr = rangeOfNumbers(startNum, endNum - 1);
    rangeArr.push(endNum);
    return rangeArr;
  }
}

console.log(rangeOfNumbers(2, 4));
