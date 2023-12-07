const fs = require('fs').promises;

async function main() {
    const inputData = await readInputFile();
    const inputDataArr = inputData.split('\n');
    const sum = isGamePossible(inputDataArr);
    console.log(sum);
}

async function readInputFile() {
    try {
        const data = await fs.readFile('./input.txt', 'utf-8');
        return data; 
    } catch (err) {
        console.error(`Attempt to read input file failed ${err}`);
    }
}

function isGamePossible(inputData) {
    const maxCubes = {
        red: 12, 
        green: 13,
        blue: 14
    };
    let sum = 0;
    let gameId = 1;
    for (const line of inputData) {
      let passes = true;
  
      const sets = line.replace(/Game [\d]*:\s/g, "").split(";");
      for (const set of sets) {
        const colorWithCount = set.split(",");
        for (const colorCount of colorWithCount) {
          const [count, color] = colorCount.trim().split(" ");
          if (count > maxCubes[color]) {
            passes = false;
          }
        }
      }
  
      if (passes) {
        sum += gameId;
      }
  
      gameId++;
    }
    return sum;
}
main();