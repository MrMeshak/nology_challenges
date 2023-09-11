export function sum(...args) {
  if (args.length === 0) {
    throw new Error('You must have at least one argument for this function');
  }

  if (args.some((num) => typeof num !== 'number')) {
    throw new Error('All arguments must be of type number');
  }

  return args.reduce((sum, num) => sum + num);
}
