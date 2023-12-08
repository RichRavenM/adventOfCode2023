const fs = require("fs");

const object = {};

const array = fs
  .readFileSync("C:\\Users\\richa\\coding\\advent\\advent8\\advent8.txt", {
    encoding: "utf8",
  })
  .replace(/\r/g, "")
  .split("\n");
const string =
  "LRLLRRRLRRLRRRLRLRRLLRRLRRLRRLRRRLLRRLRRLLLRRLLRRRLRRRLRRRLRLRRRLRRRLRLRLRRLRLRRRLRLRLRRRLLRRRLRLRRLLLRRRLLRRLLLRRRLRRLLRLRLRRRLRRLLRRLRRRLRRRLLRRRLLRRRLRRLRRLRLRRRLLLRRRLRRRLRLRRLRRLRRLRRLRRLRRRLRRRLRRLLRRLRRRLRLLRLLRRLLRRLRRRLRRRLRRRLRRRLRRLRRRLLRRLRRRLRRLRRRLRRLRRLRRLRRLRRLRLRRRR";

const objMaker = (str) => {
  const str1 = str.substring(0, 3);
  const str2 = str.substring(7, 10);
  const str3 = str.substring(12, 15);
  object[str1] = [str2, str3];
};

array.forEach((x) => objMaker(x));

const aEnds = Object.keys(object).filter((x) => x[2] == "A");

const stepFinder = (obj, str, location = "AAA") => {
  let steps = 0;
  let counter = 0;

  while (location[2] !== "Z") {
    const direction = str[counter % str.length];

    if (direction === "L") {
      location = obj[location][0];
    } else {
      location = obj[location][1];
    }
    steps++;
    counter++;
  }
  return steps;
};

const a = aEnds.map((x) => stepFinder(object, string, x));

const gcd = (a, b) => (a ? gcd(b % a, a) : b);

const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(a.reduce(lcm));
