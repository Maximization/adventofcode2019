/* Setup */
const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .split('\n')
  .map(Number);

/* Part 1 */
const answerPart1 = input
  .map((mass) => {
    return Math.floor(mass / 3) - 2;
  })
  .reduce((totalFuel, fuel) => {
    return totalFuel + fuel;
  }, 0);

console.log('Answer part 1:', answerPart1);

/* Part 2 */
function calculateFuel(mass) {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel < 0) {
    return 0;
  }

  return fuel + calculateFuel(fuel);
}

const answerPart2 = input
  .map((mass) => {
    return calculateFuel(mass);
  })
  .reduce((totalFuel, fuel) => {
    return totalFuel + fuel;
  }, 0);

console.log('Answer part 2:', answerPart2);
