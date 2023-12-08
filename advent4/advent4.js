const fs = require("fs");

const data = fs
  .readFileSync("C:\\Users\\richa\\coding\\advent\\advent4\\advent4.txt", {
    encoding: "utf8",
  })
  .split("\n");

const regex = /\d+/g;

const scores = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
  6: 32,
  7: 64,
  8: 128,
  9: 256,
  10: 512,
};

newData = data.map((x) => {
  const y = x.replace("\r", "").split(":").pop().trim().split("|");
  y[0] = y[0].match(regex);
  y[1] = y[1].match(regex);
  y.push(1);
  return y;
});

const scoreCalculator = ([winners, numbers]) => {
  let count = 0;
  numbers.forEach((number) => {
    if (winners.indexOf(number) != -1) {
      count++;
    }
  });
  console.log;
  return count;
};

let sum = 0;
newData.forEach((x) => {
  sum += scores[scoreCalculator(x)];
});

console.log(sum);

for (let i = 0; i < newData.length; i++) {
  const count = scoreCalculator(newData[i]);
  const modifier = newData[i][2];
  if (count > 0) {
    for (let j = i + 1; j <= i + count; j++) {
      if (j <= newData.length - 1) {
        newData[j][2] += modifier;
      }
    }
  }
}

const output = newData.reduce((a, b) => a + b[2], 0);

console.log(output);
