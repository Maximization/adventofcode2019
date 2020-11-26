/* Setup */
const fs = require('fs');
const path = require('path');
const originalInput = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf8')
  .split(',')
  .map(Number);

/* Part 1 */
const answerPartOne = [...originalInput];
answerPartOne[1] = 12;
answerPartOne[2] = 2;

for (let i = 0; i < answerPartOne.length; i += 4) {
  const opcode = answerPartOne[i];

  if (opcode === 99) {
    break;
  }

  const positionOne = answerPartOne[i + 1];
  const positionTwo = answerPartOne[i + 2];
  const positionThree = answerPartOne[i + 3];

  if (opcode === 1) {
    answerPartOne[positionThree] = answerPartOne[positionOne] + answerPartOne[positionTwo];
  } else if (opcode === 2) {
    answerPartOne[positionThree] = answerPartOne[positionOne] * answerPartOne[positionTwo];
  }
}

console.log('Answer part 1:', answerPartOne[0]);

/* Part 2 */
function executeProgram(input, noun, verb) {
  input[1] = noun;
  input[2] = verb;

  for (let i = 0; i < input.length; i += 4) {
    const opcode = input[i];

    if (opcode === 99) {
      break;
    }

    const positionOne = input[i + 1];
    const positionTwo = input[i + 2];
    const positionThree = input[i + 3];

    if (opcode === 1) {
      input[positionThree] = input[positionOne] + input[positionTwo];
    } else if (opcode === 2) {
      input[positionThree] = input[positionOne] * input[positionTwo];
    }
  }

  return input[0];
}

for (let noun = 0; noun <= 99; noun++) {
  let output;
  let verb;

  for (verb = 0; verb <= 99; verb++) {
    const input = [...originalInput];
    output = executeProgram(input, noun, verb);

    if (output === 19690720) {
      break;
    }
  }

  if (output === 19690720) {
    console.log('Answer part 2', 100 * noun + verb);
    break;
  }
}
