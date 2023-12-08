const fs = require("node:fs/promises");

const numberGetter = (stringy) => {
    const regex = /[0-9]/g;
    const arr = stringy.match(regex);
    const start = arr[0];
    const end = arr[arr.length - 1];
    return +(start + end);
  };
  
  const lineToNumber = (stringy) => {
    const conversionArr = [
      ["one", "o1e"],
      ["two", "t2o"],
      ["three", "t3e"],
      ["four", "f4r"],
      ["five", "f5e"],
      ["six", "s6x"],
      ["seven", "s7n"],
      ["eight", "e8t"],
      ["nine", "n9e"],
    ];
  
    conversionArr.forEach((x) => {
      if (stringy.includes(x[0])) {
          const regexConst = new RegExp(x[0], "g");
        stringy = stringy.replace(regexConst, x[1]);
      }
    });
    return stringy
  };

const doThing = () => {
  fs.readFile("C:\\Users\\richa\\coding\\advent\\advent1\\advent1.txt", "utf8")
    .then((result) => {
      const arr = result.split("\n");
      let sum = 0;

      arr.forEach((x) => {
        const y = lineToNumber(x)
        sum += numberGetter(y);
      });

      console.log(sum);
    })
    .catch((err) => {
      console.log(err);
    });
};

doThing()


