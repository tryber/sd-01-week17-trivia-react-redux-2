export function whatLevel(difficulty) {
  switch (difficulty) {
    case 'hard':
      return 3;
    case 'medium':
      return 2;
    case 'easy':
      return 1;
    default:
      return 0;
  }
}

export function getRandomInt(min, max) {
  const minimun = Math.ceil(min);
  const maximun = Math.floor(max);
  return Math.floor(Math.random() * (maximun - minimun)) + minimun;
}
