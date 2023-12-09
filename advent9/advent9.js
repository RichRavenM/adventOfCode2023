const fs = require("fs");

// const seq = [
//   [0, 3, 6, 9, 12, 15],
//   [1, 3, 6, 10, 15, 21],
//   [10, 13, 16, 21, 30, 45],
// ];

const seq = fs
  .readFileSync("C:\\Users\\richa\\coding\\advent\\advent9\\advent9.txt", {
    encoding: "utf8",
  })
  .replace(/\r/g, "")
  .split("\n")
  .map((x) => {
    const y = x.split(" ");
    return y.map((z) => +z);
  });


const zeroFinder = (arr, acc = []) => {
  acc.unshift(arr);
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i] - arr[i - 1];
    newArr.push(val);
  }

  if (newArr.every((x) => x === 0)) {
    acc.unshift(newArr);
    return acc;
  } else {
    return zeroFinder(newArr, acc);
  }
};

const newArr = zeroFinder(seq);

const newEnd = (arr) => {
  arr[0].push(0);
  for (let i = 1; i < arr.length; i++) {
    const newVal = arr[i][arr[i].length - 1] + arr[i - 1][arr[i].length - 1];
    arr[i].push(newVal);
  }
  arr = arr.flat();
  return arr[arr.length - 1];
};

const output = seq.map((x) => newEnd(zeroFinder(x))).reduce((a, b) => a + b, 0);
console.log(output);
