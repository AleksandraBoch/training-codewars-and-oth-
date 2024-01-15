//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    const initialValue = 0;

    if(numbers ===[])  return 0;
    else return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
};