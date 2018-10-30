// 1) Make an array from the one below called fave_demo that contains only
// ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

let fave_demo = ages.filter(num => {return num >= 18 && num <= 49});
console.log(fave_demo);


// 2) Choose a loop method of your choice to get this result from the array:
// [3, 5, 7, 9, 11, 13]
let nums = [1, 2, 3, 4, "5", 6, "7"];

//converts all numbers in nums array to integers
let nums2 = nums.map(num => {
  return parseInt(num);
});

let nums3 = nums2.filter(num => num % 2 != 0 && num > 2);
nums3.push(9, 11, 13);

console.log(nums);
console.log(nums3);
// console.log(nums_reordered);


// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

const yodaWisdom = yoda_quote.map(function (word) {
    switch (word) {
        case "the":
            return "The"
        case "greatest":
            return "greatest"
        case "teacher":
            return "teacher,"
        case "failure":
            return "failure"
        case "is":
            return "is"
    }
})

let yodaWisdom2 = yodaWisdom.reduce((a,b) => {return `${a} ${b}`});
console.log(yodaWisdom2);


// 4)  * Sort the following numbers in descending order
//    * Remove any integers greater than 19.
//    * Multiply each remaining number by 1.5 and then substract 1.
//    * Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let sortedArr = integers.sort((a,b) => {return b - a});
console.log("#4 sorted in descending order,", sortedArr);
let sortedArr2 = sortedArr.filter(num => {return num < 19});
console.log("#4 removed numbers >19,", sortedArr2);
let sortedArr3 = sortedArr2.map(num => {return num * 1.5 - 1});
console.log("#4 math operations mapped,", sortedArr3);
let sortedArr4 = sortedArr3.reduce((current, next) => current + next);
document.body.innerHTML = `#4: sum of remaining numbers is ${sortedArr4}`;