const BANKROLL_DIVISION_FACTOR = 5;
const UNIT_DIVISION_FACTOR = 40;

export const dividbank = bankroll => {
  const dividedBankRoll = bankroll / BANKROLL_DIVISION_FACTOR;

  return dividedBankRoll;
};

export const targetPerSession = unit => {
  const targetPerSession = unit / UNIT_DIVISION_FACTOR;

  return Math.round(targetPerSession * 100) / 100;
};
