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