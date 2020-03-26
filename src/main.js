const fizzbuzz = (number) => {
  if (typeof number !== 'number') return 'It is not a number';

  if (!number) return number;

  const isMultipleOfThree = number % 3 === 0;
  const isMultipleOfFive = number % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) return 'FizzBuzz';

  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz';

  return number;
};

export default fizzbuzz;
