function diceGenerator() {
  function roll(dice) {
    const min = 1;
    let max = dice;
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  return Object.freeze({
    roll
  });
}

const DiceGenerator = diceGenerator();

export { DiceGenerator };
