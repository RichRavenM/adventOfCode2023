const fs = require("fs");

const seeds = [
  [2906422699, 2906422699 + 6916147],
  [3075226163, 3075226163 + 146720986],
  [689152391, 689152391 + 244427042],
  [279234546, 279234546 + 382175449],
  [1105311711, 1105311711 + 2036236],
  [3650753915, 3650753915 + 127044950],
  [3994686181, 3994686181 + 93904335],
  [1450749684, 1450749684 + 123906789],
  [2044765513, 2044765513 + 620379445],
  [1609835129, 1609835129 + 60050954],
];

const dataMaker = (arr) => {
  const val = arr.map((x) => {
    const y = x.split(" ").map((t) => +t);
    return y;
  });
  const output = val.map((x) => {
    const arr1 = [x[1], x[1] + x[2] - 1];

    return [arr1, x[0], x[2]];
  });
  return output;
};
const soilData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent51.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const fertilizerData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent52.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const waterData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent53.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const lightData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent54.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const tempData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent55.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const humData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent56.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const locData = dataMaker(
  fs
    .readFileSync("C:\\Users\\richa\\coding\\advent\\advent5\\advent57.txt", {
      encoding: "utf8",
    })
    .replace(/\r/g, "")
    .split("\n")
);

const converter = (input, data) => {
  const arr = [];
  input.forEach((x) => {
    const checker = arr.length;
    for (let i = 0; i < data.length; i++) {
      if (
        x[0] >= data[i][0][0] &&
        x[0] < data[i][0][1] &&
        x[1] > data[i][0][1]
      ) {
        const lower = x[0] - data[i][0][0] + data[i][1];
        const upper = data[i][1] + data[i][2] - 1;
        arr.push([lower, upper]);
      }
      if (x[0] < data[i][0][0] && x[1] > data[i][0][1]) {
        const lower = data[i][1];
        const upper = data[i][1] + data[i][2] - 1;
        arr.push([lower, upper]);
      }
      if (
        x[0] < data[i][0][0] &&
        x[1] > data[i][0][0] &&
        x[1] <= data[i][0][1]
      ) {
        const lower = data[i][1];
        const upper = x[1] - data[i][0][0] + data[i][1];
        arr.push([lower, upper]);
      }
      if (x[0] >= data[i][0][0] && x[1] <= data[i][0][1]) {
        const lower = x[0] - data[i][0][0] + data[i][1];
        const upper = x[1] - data[i][0][0] + data[i][1];
        arr.push([lower, upper]);
      }
    }
    const evalL = data.sort((a, b) => a[0][0] - b[0][0]).map((x) => x[0][0]);
    const evalU = data.sort((a, b) => b[0][1] - a[0][1]).map((x) => x[0][1]);
    if (arr.length != checker && x[0] < evalL[0]) {
      arr.push([x[0], evalL[0] - 1]);
    }
    if (arr.length != checker && x[1] > evalU[0]) {
      arr.push([evalU[0] + 1, x[1]]);
    }
    if (arr.length == checker) {
      arr.push([x[0], x[1]]);
    }
  });
  return arr;
};

const con1 = converter(seeds, soilData);
const con2 = converter(con1, fertilizerData);
const con3 = converter(con2, waterData);
const con4 = converter(con3, lightData);
const con5 = converter(con4, tempData);
const con6 = converter(con5, humData);
const con7 = converter(con6, locData);
console.log(Math.min(...con7.map((x) => x[0])));
