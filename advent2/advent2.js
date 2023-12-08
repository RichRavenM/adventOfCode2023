const fs = require("node:fs/promises");

const greenChecker = (stringy) => {
  const regex = /[0-9]+(?= green)/
  if(regex.test(stringy))
  {
    return stringy.match(regex)[0] <= 13
  }
  return true
}

const redChecker = (stringy) => {
  const regex = /[0-9]+(?= red)/
  if(regex.test(stringy))
  {
    return stringy.match(regex)[0] <= 12
  }
  return true
}

const blueChecker = (stringy) => {
  const regex = /[0-9]+(?= blue)/
  if(regex.test(stringy))
  {
    return stringy.match(regex)[0] <= 14
  }
  return true
}

const validator = (game) => {
  let output = true
  game[1].forEach(x => {
    if(!greenChecker(x) || !redChecker(x) || !blueChecker(x))
    {
      output = false
    }
  })
  return output
}

const maxGetter = (game) => {
  const greenRegex = /[0-9]+(?= green)/g
  const redRegex = /[0-9]+(?= red)/g
  const blueRegex = /[0-9]+(?= blue)/g

  const green = Math.max(...game[1].match(greenRegex))
  const red = Math.max(...game[1].match(redRegex))
  const blue = Math.max(...game[1].match(blueRegex))

  return green * red * blue
}


const doThing = () => {
  fs.readFile("C:\\Users\\richa\\coding\\advent\\advent2\\advent2.txt", "utf8")
    .then((result) => {
      const arr = result.split("\n");
      const powerSetsArr = arr.map((z) => z.replace("\r", "").split(":"));
      let powerSum = 0
      powerSetsArr.forEach(z => {
        powerSum += maxGetter(z)
      })
      console.log(powerSum)


      const newArr = arr.map((x) => {
        x = x.replace("\r", "");
        x = x.split(":");
        x[1] = x[1].split(";")
        return x;
      });
      let sum = 0
      
      newArr.forEach(x => {
        if(validator(x))
        {
          sum += +x[0]
        }
      })

      console.log(sum)
    })
    .catch((err) => {
      console.log(err);
    });
};

doThing();