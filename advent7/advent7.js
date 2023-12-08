const fs = require("fs");
// const cards = [
//   ["32T3K", 765],
//   ["T55J5", 684],
//   ["KK677", 28],
//   ["KTJJT", 220],
//   ["QQQJA", 483],
// ];

const cards = fs
  .readFileSync("C:\\Users\\richa\\coding\\advent\\advent7\\advent7.txt", {
    encoding: "utf8",
  })
  .replace(/\r/g, "")
  .split("\n")
  .map((x) => {
    const y = x.split(" ");
    y[1] = +y[1];
    return y;
  });

const obj = {
  J: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  Q: 12,
  K: 13,
  A: 14,
};
const five = [];
const four = [];
const full = [];
const three = [];
const two = [];
const one = [];
const high = [];

const assigner = (arr) => {
  const checkVal = arr[0].split("").sort();
  const jokers = checkVal.filter((x) => x == "J").length;
  const a = new Set(checkVal);
  if (a.size === 5) {
    if (jokers > 0) {
      one.push(arr);
    } else {
      high.push(arr);
    }
  } else if (a.size === 4) {
    if (jokers > 0) {
      three.push(arr);
    } else {
      one.push(arr);
    }
  } else if (a.size === 3) {
    if (
      checkVal[0] === checkVal[2] ||
      checkVal[1] === checkVal[3] ||
      checkVal[2] === checkVal[4]
    ) {
      if (jokers > 0) {
        four.push(arr);
      } else {
        three.push(arr);
      }
    } else {
      if (jokers == 2) {
        four.push(arr);
      } else if (jokers == 1) {
        full.push(arr);
      } else {
        two.push(arr);
      }
    }
  } else if (a.size === 2) {
    if (checkVal[0] === checkVal[3] || checkVal[1] === checkVal[4]) {
      if (jokers > 0) {
        five.push(arr);
      } else {
        four.push(arr);
      }
    } else {
      if (jokers > 0) {
        five.push(arr);
      } else {
        full.push(arr);
      }
    }
  } else {
    five.push(arr);
  }
};

const sorter = (card1, card2) => {
  for (let i = 0; i < 5; i++) {
    if (obj[card1[i]] < obj[card2[i]]) {
      return -1;
    }
    if (obj[card2[i]] < obj[card1[i]]) {
      return 1;
    }
    continue;
  }
};

cards.forEach((x) => assigner(x));
const sFive = five.sort((a, b) => sorter(a[0], b[0]));
const sFour = four.sort((a, b) => sorter(a[0], b[0]));
const sFull = full.sort((a, b) => sorter(a[0], b[0]));
const sThree = three.sort((a, b) => sorter(a[0], b[0]));
const sTwo = two.sort((a, b) => sorter(a[0], b[0]));
const sOne = one.sort((a, b) => sorter(a[0], b[0]));
const sHigh = high.sort((a, b) => sorter(a[0], b[0]));

const output = sHigh
  .concat(sOne)
  .concat(sTwo)
  .concat(sThree)
  .concat(sFull)
  .concat(sFour)
  .concat(sFive);

const sum = (arr) => {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output += arr[i][1] * (i + 1);
  }
  return output;
};

console.log(sum(output));
