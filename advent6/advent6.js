const timeDistances = [
  [40, 277],
  [82, 1338],
  [91, 1349],
  [66, 1063],
];

const calcWins = (maxTime, distance) => {
  let count = 0;
  for (let i = 1; i < maxTime; i++) {
    const result = i * (maxTime - i);
    if (result > distance) {
      count++;
    }
  }
  return count;
};

const results = timeDistances.map(([x, y]) => calcWins(x, y));
console.log(results.reduce((a, b) => a * b, 1));

console.log(calcWins(40829166, 277133813491063));
