const fs = require("node:fs/promises");


const doThing = () => {
    fs.readFile(
      "C:\\Users\\richa\\coding\\advent\\advent3\\advent3.txt",
      "utf8"
    )
      .then((result) => {
        const regex = /\r/g;
        const arr = result.replace(regex, "").split("\n");
        partNumberFinder(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  doThing();


  const partNumberFinder = (arr) => {
    const regex = /[^0-9.]/
    let num = ""
    let output = false
    let sum = 0
    for(let i = 0; i < arr.length; i++)
    {
      for (let j = 0; j < arr[i].length; j++) {
        if (/[0-9]/.test(arr[i][j])) {
          num += arr[i][j];
          if (
            (i !== 0 && i !== arr.length - 1 &&
              (regex.test(arr[i][j - 1]) ||
                regex.test(arr[i][j + 1]) ||
                regex.test(arr[i + 1][j + 1]) ||
                regex.test(arr[i - 1][j - 1]) ||
                regex.test(arr[i - 1][j + 1]) ||
                regex.test(arr[i + 1][j - 1]) ||
                regex.test(arr[i + 1][j]) ||
                regex.test(arr[i - 1][j]))) ||
            (i === arr.length - 1 &&
              (regex.test(arr[i][j - 1]) ||
                regex.test(arr[i][j + 1]) ||
                regex.test(arr[i - 1][j - 1]) ||
                regex.test(arr[i - 1][j + 1]) ||
                regex.test(arr[i - 1][j]))) ||
            (i === 0 &&
              (regex.test(arr[i][j - 1]) ||
                regex.test(arr[i][j + 1]) ||
                regex.test(arr[i + 1][j + 1]) ||
                regex.test(arr[i + 1][j - 1]) ||
                regex.test(arr[i + 1][j])))
          ) {
            output = true;
          }
        } else {
          if (num.length > 0) {
            if (output) {
              console.log(num);
              sum += +num;
              output = false;
            }
            num = "";
          }
        }
      }
    }
    console.log(sum, "g")
  }

// partNumberFinder(["467..114..",
// "...*......",
// "..35..633.",
// "......#...",
// "617*......",
// ".....+.58.",
// "..592.....",
// "......755.",
// "...$.*....",
// ".664.598.."])

