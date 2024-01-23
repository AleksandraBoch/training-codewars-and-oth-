//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    const initialValue = 0;

    if(numbers ===[])  return 0;
    else return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
};
//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
    let newArr = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            newArr.push("Senior");
        } else {
            newArr.push("Open");
        }
    }
    return newArr;
}
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    let newStr=s1.split('').sort().join('')
    let newSrt2=s2.split('').sort().join('')

    if(newStr> newSrt2)return newStr
    else return  newSrt2
}
//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
const longestStr=(s1,s2)=>{
    return (s1 + s2).split('').sort().filter((value, index, array) => array.indexOf(value) === index).join('');}

//John wants to decorate the walls of a room with wallpaper. He wants a fool-proof method for getting it right.
//
// John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.
//
// Last time he did these calculations he got a headache, so could you help John?
//
// Task
// Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.
//
// Example:
// wallpaper(4.0, 3.5, 3.0) should return "ten"
//
// wallpaper(0.0, 3.5, 3.0) should return "zero"
//
// Notes:
// all rolls (even with incomplete width) are put edge to edge
//
// 0 <= l, w, h (floating numbers); it can happens that w * h * l is zero
//
// the integer r (number of rolls) will always be less or equal to 20
//
// FORTH: the number of rolls will be a positive or null integer (not a plain English word; this number can be greater than 20)
//
// In Coffeescript, Javascript, Python, Ruby and Scala the English numbers are preloaded and can be accessed as:
//
// numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
// For other languages it is not preloaded and you can instead copy the above list if you desire.



function wallpaper(l, w, h) {
    if (l <= 0 || w <= 0 || h <= 0) {
        return "zero";
    }
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    let area=2*(l*h+w*h)
    let countOfRolls=Math.ceil((area/(0.52*10)+((area/(0.52*10))*0.15)))
    return  numbers[countOfRolls]

}


