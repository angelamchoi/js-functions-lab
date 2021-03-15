// 1.  Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}
console.log(maxOfTwoNumbers(2, 7));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThree = function(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  };

//  3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(vowel) {
    vowel = vowel.toLowerCase();
    return 'aeiouy'.includes(vowel);
} else {
    return false;
}

//  4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(arrNumbers) {
    let sum = 0;
    arrNumbers.forEach(function(n) {
        sum += n;
    });
    return sum;
};
    console.log(sumArray([8, 4, 3]));

//  5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(multiply) {
    let product = 1;
    for (let i = 0; i < multiply.length; i++) {
        product * multiply[i];
    }
    return product;
}
console.log(multiplyArray([5, 2, 7]));


//  6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArugments = function(...args) {
    return args.length;
};
console.log(numArgs('test', true, 5));


//  6. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(s) {
    // strings don't have a reverse method - but arrays do!
    let arr = s.split('');
    return arr.reverse().join('');
}

console.log(reverseString('rockstar'));

//  8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function(arr) {
    let longest = 0;
    arr.forEach(function(s) {
        if (s.length > longest) longest = s.length;
    });
    return longest;
};

console.log(longestStringInArray(['pizza', 'hi', 'sushi', 'coffee', 'coding']));


//  9.  Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(arr, len) {
    return arr.filter(function(s) {
        return (s.length > len);
    });
};

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));