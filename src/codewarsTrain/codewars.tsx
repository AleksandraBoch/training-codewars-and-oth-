import React from "react";

//A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
//
// function dominator(arr) {
//     const indexes = {};
//
//     for (let x = 0; x < arr.length; x++) {
//         indexes[arr[x]] = indexes[arr[x]] ? indexes[arr[x]] + 1: 1;
//         if (indexes[arr[x]] > arr.length / 2) return arr[x];
//     }
//
//     return -1;
// }

// Create a function which answers the question "Are you playing banjo?".
//     If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
//     name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
// function areYouPlayingBanjo(name) {
//     // Implement me
//     if (name[0]=='R' || name[0] =='r')
//         return name + ' plays banjo';
//     else return name  +' does not play banjo'
//         ;
// }
//In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
//
// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:
//
// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.
//
// function isLeapYear(year) {
//   if(year % 400 ==0)return true
//   if(year % 100 ==0) return false
//
//    if (year % 4 ==0) return true
//   return false
//   // TODO
// }
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }
//

//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.
//function addBinary(a,b) {
//   answer=a+b
// return (answer, answer.toString(2))
// }